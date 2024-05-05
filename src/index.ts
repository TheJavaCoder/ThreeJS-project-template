import * as THREE from "three";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

let Scene = new THREE.Scene();
let Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
Camera.position.z = 2

let Renderer = new THREE.WebGLRenderer();
let Controls = new OrbitControls(Camera, Renderer.domElement);
let Geometry = new THREE.BoxGeometry()
let Material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

let Cube = new THREE.Mesh(Geometry, Material)
Scene.add(Cube)


window.onload = () => {
    BuildScene();    
}

const BuildScene = () => {
    Renderer.setSize(window.innerWidth, window.innerHeight);

    document.getElementById("ThreeJSCanvas").appendChild(Renderer.domElement);


    Update();
    Render();
}

const Update = () => {
    requestAnimationFrame(Update);

    Cube.rotation.x += 0.001;
    Cube.rotation.y += 0.001;

    Controls.update();

    Render();
}


const onWindowResize = () => {
    Camera.aspect = window.innerWidth / window.innerHeight;
    Camera.updateProjectionMatrix();
    Renderer.setSize(window.innerWidth, window.innerHeight);
    Render();
}

function Render() {
    Renderer.render(Scene, Camera);
}

window.addEventListener('resize', onWindowResize, false);