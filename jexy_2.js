$(document).ready(function() {

var audio = new Audio('Canvas_sprites/Other/Super Mario Them.wav');
audio.play();

var intro = new Array()
intro[0]="Canvas_sprites/Other/anim092.png"
intro[1]="Canvas_sprites/Other/anim093.png"
intro[2]="Canvas_sprites/Other/anim094.png"
intro[3]="Canvas_sprites/Other/anim095.png"
intro[4]="Canvas_sprites/Other/anim096.png"
intro[5]="Canvas_sprites/Other/anim097.png"
intro[6]="Canvas_sprites/Other/anim098.png"
intro[7]="Canvas_sprites/Other/anim099.png"
intro[8]="Canvas_sprites/Other/anim100.png"
intro[9]="Canvas_sprites/Other/anim101.png"
intro[10]="Canvas_sprites/Other/anim102.png"
intro[11]="Canvas_sprites/Other/anim103.png"
intro[12]="Canvas_sprites/Other/anim104.png"
intro[13]="Canvas_sprites/Other/anim105.png"
intro[14]="Canvas_sprites/Other/anim106.png"
intro[15]="Canvas_sprites/Other/anim107.png"
intro[16]="Canvas_sprites/Other/anim108.png"
intro[17]="Canvas_sprites/Other/anim109.png"
intro[18]="Canvas_sprites/Other/anim110.png"
intro[19]="Canvas_sprites/Other/anim111.png"
intro[20]="Canvas_sprites/Other/anim112.png"
intro[21]="Canvas_sprites/Other/anim113.png"
intro[22]="Canvas_sprites/Other/anim114.png"
intro[23]="Canvas_sprites/Other/anim115.png"

var canvas = document.getElementById("myCanvas");  
var ctx = canvas.getContext("2d");

function make_base(a){
		base_image = new Image();
		base_image.src = intro[a];
		base_image.onload = function(){
			ctx.drawImage(base_image, 100, 100);
		};
	}
		
for(var i = 0; i < intro.length; i++){
	make_base(i);
	}	
	
});







            
