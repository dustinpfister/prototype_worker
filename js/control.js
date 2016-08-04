var control = (function () {

    var userMain = function(e){
		
		console.log(e);
		
	}


	return {
		
		// attach events to the given canvas
		attachToCanvas : function(canvas){
			
			canvas.addEventListener('mousedown', userMain);
			
		}
		
	}
	
}
    ());
