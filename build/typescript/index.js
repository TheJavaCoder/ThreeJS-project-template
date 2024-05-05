"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var THREE = require("three");
var OrbitControls_1 = require("three/examples/jsm/controls/OrbitControls");
var Scene = new THREE.Scene();
var Camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
Camera.position.z = 2;
var Renderer = new THREE.WebGLRenderer();
var Controls = new OrbitControls_1.OrbitControls(Camera, Renderer.domElement);
var Geometry = new THREE.BoxGeometry();
var Material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
});
var Cube = new THREE.Mesh(Geometry, Material);
Scene.add(Cube);
window.onload = function () {
    BuildScene();
};
var BuildScene = function () {
    Renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById("ThreeJSCanvas").appendChild(Renderer.domElement);
    Update();
    Render();
};
var Update = function () {
    requestAnimationFrame(Update);
    Cube.rotation.x += 0.001;
    Cube.rotation.y += 0.001;
    Controls.update();
    Render();
};
var onWindowResize = function () {
    Camera.aspect = window.innerWidth / window.innerHeight;
    Camera.updateProjectionMatrix();
    Renderer.setSize(window.innerWidth, window.innerHeight);
    Render();
};
function Render() {
    Renderer.render(Scene, Camera);
}
window.addEventListener('resize', onWindowResize, false);
//# sourceMappingURL=index.js.map