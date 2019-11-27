#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_mouse;
uniform vec2 u_resolution; // This is passed in as a uniform from the sketch.js file
uniform vec2 u_point;
uniform vec2 u_point2;
varying vec2 vTexCoord;


void main() {
  vec2 coord = vTexCoord;
  // vec2 st = gl_FragCoord.xy/(u_mouse.xy * vec2(1000, 1000)); 

  // gl_FragColor = vec4(st.y,0.0,0.0,1.0); // R,G,B,A
  float dist = distance(u_point, coord);

  // x values for red, y values for green, both for blue
  gl_FragColor = vec4(dist, 0.0, dist, 1.0);
}

