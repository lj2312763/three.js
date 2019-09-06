// var scene = new THREE.Scene()
// var canera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
//
// var render = new THREE.WebGLRenderer()
// render.render(window.innerWidth, window.innerHeight)
// document.body.appendChild(render.domElement)

var width = 500
var height = 500
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.CubeGeometry(1, 1, 1)
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
var cube = new THREE.Mesh(geometry, material)
scene.add(cube)

camera.position.z = 5

function render () {
  requestAnimationFrame(render)
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera)
}

render()