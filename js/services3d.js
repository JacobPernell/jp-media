const servicesArea = document.querySelector(".services");

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer({
  alpha: true // remove canvas' bg color
});
// Make scene renderer the size of the screen
renderer.setSize(window.innerWidth, window.innerHeight);

servicesArea.appendChild( renderer.domElement );

var geometry = new THREE.DodecahedronGeometry( 1, 0 );
var material = new THREE.MeshBasicMaterial( { color: 0x10ff10 } );
var dodecahedron = new THREE.Mesh( geometry, material );
scene.add( dodecahedron );

camera.position.z = 5;


var animate = function () {
	requestAnimationFrame( animate );

	dodecahedron.rotation.x += 0.01;
	dodecahedron.rotation.y += 0.01;

	renderer.render( scene, camera );
};

animate();
