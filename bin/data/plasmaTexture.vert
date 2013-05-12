#version 120

void main()
{
	gl_Position= gl_ProjectionMatrix*gl_ModelViewMatrix* gl_Vertex;
	
	//gl_FrontColor.rgb = 0.5 * gl_Normal.xyz + 0.5;
    //gl_FrontColor.a = 1.0;
}

