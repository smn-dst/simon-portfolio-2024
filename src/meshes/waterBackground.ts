import * as THREE from 'three';
import { GPUComputationRenderer } from 'three/addons/misc/GPUComputationRenderer.js';
import { SimplexNoise } from 'three/addons/math/SimplexNoise.js';

import heightmapFragmentShader from '../shaders/heightmapFragmentShader.glsl';
import smoothFragmentShader from '../shaders/smoothFragmentShader.glsl';
import readWaterLevelFragmentShader from '../shaders/readWaterLevelFragmentShader.glsl';
import waterVertexShader from '../shaders/waterVertexShader.glsl';

const WIDTH = 180;
const BOUNDS = 612;

let camera: THREE.PerspectiveCamera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;
let gpuCompute: GPUComputationRenderer;
let heightmapVariable: any;
let readWaterLevelShader: THREE.ShaderMaterial;
let waterUniforms: any;
let waterMesh: THREE.Mesh;
let meshRay: THREE.Mesh;
let mouseMoved = false;
const mouseCoords = new THREE.Vector2();
const raycaster = new THREE.Raycaster();

function init(container: HTMLElement) {
  // Vérifier si la scène existe déjà et la nettoyer si nécessaire
  if (scene) {
    while (scene.children.length > 0) {
      scene.remove(scene.children[0]);
    }
    renderer.dispose();
  } else {
    renderer = new THREE.WebGLRenderer();
  }

  camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set(0, 450, 0);
  camera.lookAt(0, 10, 0);

  scene = new THREE.Scene();

  const sun = new THREE.DirectionalLight(0xFFFFFF, 3.0);
  sun.position.set(300, 400, 175);
  scene.add(sun);

  const sun2 = new THREE.DirectionalLight(0x000000, 2.0);
  sun2.position.set(-100, 350, -200);
  scene.add(sun2);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animate);
  container.appendChild(renderer.domElement);

  container.style.touchAction = 'none';
  container.addEventListener('pointermove', onPointerMove);

  window.addEventListener('resize', onWindowResize);

  initWater();
}

function initWater() {
  const materialColor = 0xFFFFFF;
  const geometry = new THREE.PlaneGeometry(BOUNDS, BOUNDS, WIDTH - 1, WIDTH - 1);
  const material = new THREE.ShaderMaterial({
    uniforms: THREE.UniformsUtils.merge([
      THREE.ShaderLib['phong'].uniforms,
      {
        'heightmap': { value: null }
      }
    ]),
    vertexShader: waterVertexShader,
    fragmentShader: THREE.ShaderChunk['meshphong_frag']
  });

  material.lights = true;
  material.uniforms['diffuse'].value = new THREE.Color(materialColor);
  material.uniforms['specular'].value = new THREE.Color(0x000000);
  material.uniforms['shininess'].value = Math.max(50, 1e-4);
  material.uniforms['opacity'].value = material.opacity;
  material.defines.WIDTH = WIDTH.toFixed(1);
  material.defines.BOUNDS = BOUNDS.toFixed(1);

  waterUniforms = material.uniforms;
  waterMesh = new THREE.Mesh(geometry, material);
  waterMesh.rotation.x = -Math.PI / 2;
  waterMesh.matrixAutoUpdate = false;
  waterMesh.updateMatrix();
  scene.add(waterMesh);

  // THREE.Mesh juste pour le raycasting de la souris
  const geometryRay = new THREE.PlaneGeometry(BOUNDS, BOUNDS, 1, 1);
  meshRay = new THREE.Mesh(geometryRay, new THREE.MeshBasicMaterial({ color: 0xFFFFFF, visible: false }));
  meshRay.rotation.x = -Math.PI / 2;
  meshRay.matrixAutoUpdate = false;
  meshRay.updateMatrix();
  scene.add(meshRay);

  gpuCompute = new GPUComputationRenderer(WIDTH, WIDTH, renderer);
  const heightmap0 = gpuCompute.createTexture();
  fillTexture(heightmap0);
  heightmapVariable = gpuCompute.addVariable('heightmap', heightmapFragmentShader, heightmap0);
  gpuCompute.setVariableDependencies(heightmapVariable, [heightmapVariable]);

  heightmapVariable.material.uniforms['mousePos'] = { value: new THREE.Vector2(10000, 10000) };
  heightmapVariable.material.uniforms['mouseSize'] = { value: 18.5 };
  heightmapVariable.material.uniforms['viscosityConstant'] = { value: 0.98 };
  heightmapVariable.material.uniforms['heightCompensation'] = { value: 0 };
  heightmapVariable.material.defines.BOUNDS = BOUNDS.toFixed(1);

  // Initialiser les shaders smooth et readWaterLevel
  let smoothShader: THREE.ShaderMaterial;
  
  smoothShader = gpuCompute.createShaderMaterial(smoothFragmentShader, { smoothTexture: { value: null } });
  readWaterLevelShader = gpuCompute.createShaderMaterial(readWaterLevelFragmentShader, {
    point1: { value: new THREE.Vector2() },
    levelTexture: { value: null }
  });
  readWaterLevelShader.defines.WIDTH = WIDTH.toFixed(1);
  readWaterLevelShader.defines.BOUNDS = BOUNDS.toFixed(1);

  const error = gpuCompute.init();
  if (error !== null) {
    console.error(error);
  }
}

function fillTexture(texture: any) {
  const waterMaxHeight = 10;
  const simplex = new SimplexNoise();

  function noise(x: number, y: number) {
    let multR = waterMaxHeight;
    let mult = 0.025;
    let r = 0;
    for (let i = 0; i < 15; i++) {
      r += multR * simplex.noise(x * mult, y * mult);
      multR *= 0.53 + 0.025 * i;
      mult *= 1.25;
    }
    return r;
  }

  const pixels = texture.image.data;
  let p = 0;
  for (let j = 0; j < WIDTH; j++) {
    for (let i = 0; i < WIDTH; i++) {
      const x = i * 128 / WIDTH;
      const y = j * 128 / WIDTH;

      pixels[p + 0] = noise(x, y);
      pixels[p + 1] = pixels[p + 0];
      pixels[p + 2] = 0;
      pixels[p + 3] = 1;

      p += 4;
    }
  }
}

function onPointerMove(event: PointerEvent) {
  if (event.isPrimary === false) return;
  setMouseCoords(event.clientX, event.clientY);
}

function setMouseCoords(x: number, y: number) {
  mouseCoords.set((x / renderer.domElement.clientWidth) * 2 - 1, -(y / renderer.domElement.clientHeight) * 2 + 1);
  mouseMoved = true;
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  render();
}

function render() {
  const uniforms = heightmapVariable.material.uniforms;
  if (mouseMoved) {
    raycaster.setFromCamera(mouseCoords, camera);
    const intersects = raycaster.intersectObject(meshRay);

    if (intersects.length > 0) {
      const point = intersects[0].point;
      uniforms['mousePos'].value.set(point.x, point.z);
    } else {
      uniforms['mousePos'].value.set(10000, 10000);
    }
    mouseMoved = false;
  } else {
    uniforms['mousePos'].value.set(10000, 10000);
  }

  gpuCompute.compute();
  waterUniforms['heightmap'].value = gpuCompute.getCurrentRenderTarget(heightmapVariable).texture;
  renderer.render(scene, camera);
}

export { init };