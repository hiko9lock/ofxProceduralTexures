float plasma(vec2 p)
{
  p*=20.0;
  return (sin(p.x)*0.25+0.25)+(sin(p.y)*0.25+0.25);
}

vec2 trans(vec2 p)
{
  float theta = atan(p.y, p.x);
  float r = length(p);
  const float radius = 1.0;
  return vec2(theta, radius/r);
}

void main (void)
{
  	vec2 pos = (gl_FragCoord.xy*2.0 -vec2(512.0,512.0)) / 512.0;
    gl_FragColor = vec4(plasma(trans(pos)));
}


