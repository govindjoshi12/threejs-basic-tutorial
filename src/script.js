import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

const geom = new THREE.BoxGeometry(1, 1, 1);
const mat = new THREE.MeshBasicMaterial({ color: 0xff00ff});
const mesh = new THREE.Mesh(geom, mat);
scene.add(mesh)

const size = {
    x: 800,
    y: 600
}

const camera = new THREE.PerspectiveCamera(75, size.x / size.y);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
});
renderer.setSize(size.x, size.y);
renderer.render(scene, camera);
