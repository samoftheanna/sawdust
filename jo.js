$(document).ready(function() {    
                var canvas = document.getElementById("myCanvas");  
                var ctx = canvas.getContext("2d");
                ctx.fillRect(50, 50, 100, 100);  
				ctx.fillStyle = "rgb(255, 0, 0)";  
				ctx.fillRect(200, 50, 100, 100);
                ctx.strokeStyle = "rgb(255, 0, 0)";
                ctx.lineWidth = 20;  
				ctx.beginPath();  
				ctx.moveTo(50, 50);  
				ctx.lineTo(50, 250);  
				ctx.lineTo(250, 250);  
				ctx.closePath();  
				ctx.stroke();  
            });

            
