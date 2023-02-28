import * as THREE from 'https://unpkg.com/three/build/three.module.js'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';


var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight, 0.1, 1000 );

const textureSimone = new THREE.TextureLoader().load( '../img/simone-welcome.png' );
// flip vertical
textureSimone.flipY = false;
// flip horizontally
textureSimone.wrapS = THREE.RepeatWrapping;
textureSimone.repeat.x = - 1;

const textureMug = new THREE.TextureLoader().load( '../img/food-bg2.webp' );


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// set background as transparent
renderer.setClearColor(0xffffff, 0);
document.body.appendChild( renderer.domElement );
var geometry = new THREE.CylinderGeometry( 5, 5, 5, 32, 1, true );
var material = new THREE.MeshBasicMaterial( { map: textureSimone, transparent:true, side: THREE.DoubleSide } );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

var geometry2 = new THREE.CylinderGeometry( 3, 4, 6, 25, 1, true );
var material2 = new THREE.MeshBasicMaterial( { map: textureMug, color: 0xfffff , wireframe: false}  );
var cylinder2 = new THREE.Mesh( geometry2, material2 );
scene.add( cylinder2 );

const loader = new FBXLoader();
loader.load('../assets/crockery_cup.fbx', (object) => {
  scene.add(object);
});

loader.load(
  '../assets/coffee-mug-school-project/source/mug.fbx',
  (object) => {
      scene.add(object)
  },
  (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
  },
  (error) => {
      console.log(error)
  }
)

camera.position.z = 20;

function render() {
	requestAnimationFrame(render);
    /* cylinder.rotation.z += 0.01; */
  cylinder.rotation.y += 0.01;
  cylinder2.rotation.y -= 0.01;

	renderer.render(scene, camera);
}
render();