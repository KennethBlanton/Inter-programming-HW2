// creates 100 particles
var createParticles = setInterval( function() {

	var snowParticles = document.body.children.length;

	if ( snowParticles < 100 ) {

		  createSnow();

	}

}, 33 );

var createSnow = function() {
	//create div and style snow
	var snow = document.createElement("div");
	document.body.appendChild( snow);
	snow.style.position = "absolute";
	var size = Math.round( Math.random() * 50 );
	snow.style.width = size + "px";
	document.body.style.background = "black";
	snow.style.top = ( 0 - size ) + "px";
	snow.style.borderRadius = "50%";
	snow.style.left = Math.random() * ( window.innerWidth + size ) + "px";
	snow.style.background = "white";
	snow.style.height = size + "px";
	
	// movement Interval
	var makeItSnow = setInterval(moveSnow, ( Math.random() * 50 ) + 50 );

	function moveSnow(){ // causes snow movement
		//movement variable. 
		var movementThreshold = Math.ceil( Math.random() * 15 )+5;
		var leftCount = 0; 
		var rightCount = 0;
		var left = parseInt( snow.style.left );
		var top = parseInt(snow.style.top);
		var newTop = top + 10;
		var newLeft;
		//changing directions
		if(leftCount === 0 || leftCount <= movementThreshold) {
			newLeft = left - Math.random() *10 + 1;
					if(leftCount == movementThreshold){
						rightCount = 0;
					}
					leftCount++;
		} else if(rCount <= movementThreshold) {
			newLeft = left + Math.random()*10 + 1;

			if(rightCount == movementThreshold){
				leftCount = 0;
			}

			rightCount++;
		}
		if(newLeft < (0 - size) || newTop > window.innerHeight){
			snow.remove();//particleremoval. and repopulation
			window.clearInterval(makeItSnow);
			return;
		}

		snow.style.left = newLeft + "px";
		snow.style.top = newTop + "px";
	}
}
window.addEventListener( "keyup", function(e){
	if ( e.keyCode === 32 ) {
	  window.clearInterval(createParticles);
	}
});
