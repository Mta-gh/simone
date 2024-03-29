import * as THREE from 'https://unpkg.com/three/build/three.module.js'
import {FBXLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/FBXLoader.js';
import {GLTFLoader} from 'https://cdn.jsdelivr.net/npm/three@0.118.1/examples/jsm/loaders/GLTFLoader.js';

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

// const loader = new FBXLoader();
// loader.load(
//   '../assets/coffee-mug-school-project/source/mug.fbx',
//   // '../assets/crockery_cup.fbx',

//   (object) => {
//       // object.scale.set(0.1, 0.1, 0.1);
//       scene.add(object)
//   },
//   (xhr) => {
//       console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
//   },
//   (error) => {
//       console.log(error)
//   }
// )

// const loader = new GLTFLoader();

// loader.load( '../assets/mug/scene.gltf', 
// function ( gltf ) {
  
//   scene.add( gltf.scene );
  
//   gltf.animations; // Array<THREE.AnimationClip>
//   gltf.scene; // THREE.Group
//   gltf.scenes; // Array<THREE.Group>
//   gltf.cameras; // Array<THREE.Camera>
//   gltf.asset; // Object
  
// },
// // called while loading is progressing
// function ( xhr ) {
  
//   console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
  
// },
// // called when loading has errors
// function ( error ) {
  
//   console.log( 'An error happened' );
  
// }
// );


// let loadedModel;
// const glftLoader = new GLTFLoader();
// glftLoader.load('../assets/shiba/scene.gltf', (gltfScene) => {
//   loadedModel = gltfScene;
//   console.log(loadedModel);

//   gltfScene.scene.rotation.y = Math.PI / 8;
//   gltfScene.scene.position.y = 3;
//   gltfScene.scene.scale.set(10, 10, 10);
//   scene.add( gltfScene.scene );
// });

camera.position.z = 20;

function render() {
  requestAnimationFrame(render);
  /* cylinder.rotation.z += 0.01; */
  cylinder.rotation.y += 0.01;
  cylinder2.rotation.y -= 0.01;
  
  renderer.render(scene, camera);
}
render();