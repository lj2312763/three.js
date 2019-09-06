let renderer

function initThree () {
  const width = document.getElementById('canvas-frame').clientWidth
  const height = document.getElementById('canvas-frame').clientHeight
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(width, height)
  document.getElementById('canvas-frame').appendChild(renderer.domElement)
  renderer.setClearColor(0xffffff, 1.0)
}

let camera

function initCamera () {
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 1000)
  camera.position.x = 0;
  camera.position.y = 1000;
  camera.position.z = 0;
  camera.up.x = 0;
  camera.up.y = 0;
  camera.up.z = 1;
  camera.lookAt({
    x: 0,
    y: 0,
    z: 0
  })
}

let scene;

function initScene () {
  scene = new THREE.Scene();
}

let light;

function initLight () {
  light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
  light.position.set(100, 100, 200)
  scene.add(light)
}

let cube;

function initObject () {
  const geometry = new THREE.Geometry();
  const material = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors })
  const color1 = new THREE.color(0x444444)
  const color2 = new THREE.color(0xff0000)
  const p1 = new THREE.Vector3(-100, 0, 100);
  const p2 = new THREE.Vector3(100, 0, -100)
  geometry.vertices.push(p1)
  geometry.vertices.push(p2)
  geometry.colors.push(color1, color2)

  const line = new THREE.Line(geometry, material, THREE.LinePieces);
  scene.add(line)
}

function render () {
  renderer.clear();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

function threeStart () {
  initThree();
  initCamera();
  initScene();
  initLight();
  initObject();
  render()
}
threeStart()