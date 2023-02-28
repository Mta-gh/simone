import * as THREE from 'https://unpkg.com/three/build/three.module.js'

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 1000, window.innerWidth / window.innerHeight, 0.1, 1000 );

const texture = new THREE.TextureLoader().load( '../img/simone-welcome.png' );
texture.flipY = false;


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// set background as transparent
renderer.setClearColor(0xffffff, 0);
document.body.appendChild( renderer.domElement );
var geometry = new THREE.CylinderGeometry( 5, 5, 5, 32, 1, true );
var material = new THREE.MeshBasicMaterial( { map: texture, transparent:true, side: THREE.DoubleSide } );
var cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

camera.position.z = 20;


function render() {
	requestAnimationFrame(render);
    /* cylinder.rotation.z += 0.01; */
  cylinder.rotation.y += 0.01;
	renderer.render(scene, camera);
}
render();