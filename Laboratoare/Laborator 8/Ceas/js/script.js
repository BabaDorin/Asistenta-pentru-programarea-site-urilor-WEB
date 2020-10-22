var canvas = document.getElementById("canvas");
canvas.style.transition = '0.3s';
var ctx = canvas.getContext("2d");

ctx.strokeStyle = '#00faaf';
ctx.lineWidth = 17;
ctx.shadowBlur = 15;
ctx.shadowColor = '#00faaf'

function degToRad(degree) {
	var factor = Math.PI / 180;
	return degree * factor;
}

function renderTime() {
	var now = new Date();
	var time = now.toLocaleTimeString();
	var hrs = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();

	//Background
	gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 200);
	gradient.addColorStop(0, "#03303a");
	gradient.addColorStop(1, "black");
	ctx.fillStyle = gradient;
	//ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
	ctx.fillRect(0, 0, 500, 500);
	//Hours
	ctx.beginPath();
	ctx.arc(250, 250, 200, degToRad(270), degToRad((hrs * 30) - 90));
	ctx.stroke();
	//Minutes
	ctx.beginPath();
	ctx.arc(250, 250, 170, degToRad(270), degToRad((min * 6) - 90));
	ctx.stroke();
	//Seconds
	ctx.beginPath();
	ctx.arc(250, 250, 140, degToRad(270), degToRad((sec * 6) - 90));
	ctx.stroke();
	//Time
	ctx.font = "30px Orbitron";
	ctx.fillStyle = 'rgba(00, 255, 255, 1)';
	ctx.fillText(time, 180, 260);
}
setInterval(renderTime, 1000);