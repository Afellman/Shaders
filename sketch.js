let theShader;
let angle = 0.01
let point;

function preload() {
    theShader = loadShader("./shader.vert", "./shader.frag");
}


function setup(){
    createCanvas(innerWidth, innerHeight, WEBGL);
    noStroke();
    point = [ width / 2 , height / 2 ];
}


function draw() {
    point[0] = width / 2 + sin(angle) * 100 
    point[1] = height / 2 + cos(angle) * 100

    theShader.setUniform("u_point", plot(point));
    theShader.setUniform("u_resolution", [width, height]);
    theShader.setUniform("u_mouse", [map(mouseX, 0, width, 0.0, 1.0), map(mouseY, 0, width, 0.0, 1.0)]); 
    shader(theShader);
    rect(0,0,width, height);

    angle += 0.03;
}

function plot(arr){
    return new Array(arr[0] / width, arr[1] / height);
}