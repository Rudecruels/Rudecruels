$(function(){
	$(".typed").typed({
        strings: ["If oppourtunity doesn't knock, create a door", "It's not our abilities what shows who we are, it's the choices","If u can't take the responsibility of wt u did u r not worth it"
    ,"There is thin line between life and death, you will find me there","Don't touch,think twice douche bags","Hola amigo, its the Kingdom of Mine","what u look'ng up bitches, no poses.Money or love , no free peeks"],
		stringsElement: null,
		
		typeSpeed: 30,
		
		startDelay: 200,
		
		backSpeed: 0,
		
		backDelay: 500,
		
		loop: true,
		
		loopCount: 5,
		
		showCursor: false,
		
		cursorChar: "|",
		
		attr: null,
		
		contentType: 'html',
		
		callback: function() {},
		
		preStringTyped: function() {},
		
		onStringTyped: function() {},
		
		resetCallback: function() {}
	});
});

