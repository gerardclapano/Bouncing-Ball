class Ball {
	
	constructor() {
		this.xSpeed = random(-5.5, 5.5);
		this.ySpeed = random(-5.5, 5.5);
		this.radius = random(10, 40);
		this.x = random(this.radius, canvas.width-this.radius);
		this.y = random(this.radius, canvas.height-this.radius);
		this.color = color_picker();

		console.log(this.xSpeed);
	}

	draw() {
		ctx.fillStyle = this.color;
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		//console.log(this.x);
		ctx.fill();
		ctx.stroke();
	}

	move() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	bounce() {
		if(this.x < this.radius || this.x > canvas.width-this.radius) {
			this.xSpeed *= -1;
			this.color = color_picker();
		}

		if(this.y < this.radius || this.y > canvas.height-this.radius) {
			this.ySpeed *= -1;
			this.color = color_picker();
		}
	}
}

// random number generator that take 2 arguments (min, max)
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


// random hex color generator
function color_picker() {
	let hex = ["A", "B", "C", "D", "E", "F", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
	let color = "";

	for(let i = 0; i < 6; i++) {
		let index = random(0, hex.length-1);
		color += hex[index]; 
	}

	return "#" + color;
}