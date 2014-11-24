// drivelet 2014 by Edan Weis

uploadFile = function (e) {
	
	var e = (!e) ? window.event : e;
	var t = (e.currentTarget) ? e.currentTarget : e.srcElement;
	var tag = t.tagName;

	setTimeout( function () {
	
		var o = '<div id="output" style="width: auto; z-index: 10000; background:#f0f0f0; background:rgba(245,245,245,0.85); -moz-border-radius: 12px; -webkit-border-radius: 12px; border-radius: 12px; border: 2px solid #f0f0f0;  -moz-box-shadow: 0 1px 4px #222; -webkit-box-shadow: 0 1px 4px #222; box-shadow: 0 1px 4px #222; position:fixed; top: 20px; right: 20px; padding: 15px;"><h1 style="display:block; text-shadow: none; background: none; letter-spacing: 0; font-size: 24px; width: auto; height: auto; -moz-box-shadow: none; -webkit-box-shadow: none; box-shadow: none; border: none; text-transform: capitalize; color: #444 !important; text-align:center; margin: 0 0 10px; line-height: 1em; padding: 0; width: 100%; position:relative; top:auto; left:auto;"></h1><p style="display:block; text-shadow: none; background: none; letter-spacing: 0; text-align:center; font-size: 10px; font-family: arial, sans-serif; letter-spacing: 1px; color: #777; width: 100%; margin: 0; padding: 0; text-transform: uppercase; line-height: 1em;"><form method="GET" id="myForm"><input type="text" name="firstname"></form></div>';
		
		document.body.innerHTML += o;	
		var gupload = document.createElement('script');
        gupload.src = 'https://script.google.com/macros/s/AKfycbwO8WZPkkCaA3rJHJQJSzTqqncag7j522kGlnigfGYZP7aLEjM/exec?imgURL='+t.src;
        gupload.id = 'gupload';
        gupload.crossorigin="anonymous";
        document.body.appendChild(gupload);
		driveletReset(true);
		
	}, 0);
	
	// handle event bubbling
	if (e.stopPropagation) {
		e.stopPropagation();
		e.preventDefault();
	}
	else e.cancelBubble = true;

};

driveletReset = function (t) {

	var a = document.getElementsByTagName('*'), i = a.length;

	while (i-- >0) {
	
		if (window.detachEvent) a[i].detachEvent('onclick', uploadFile);
		else a[i].removeEventListener('click', uploadFile, false);
		if (t) addEvent(a[i], 'click', uploadFile);
		
	}
	
	if (!t) {
		document.body.style.cursor = 'default';
		del(document.getElementById('output'));
	}

};

addEvent = function (t, e, f, o) {
	
	o = o || false;
	
	if (window.attachEvent) t.attachEvent('on' + e, f);
	else t.addEventListener(e, f, o);
	
};

del = function (t, e) {

	if (t != null) t.parentNode.removeChild(t);
	
};


rand = function (min, max) {
    return min + Math.floor(Math.random() * (max - min));
};


drivelet = function (t) {

	document.body.style.cursor = 'crosshair';
	
	var i = t.length;
	while(i-->0){ addEvent(t[i], 'click', uploadFile); }
	
};

drivelet(document.getElementsByTagName('*'));
