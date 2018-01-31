var exec = require('cordova/exec');


var MediaPicker = {
    getMedias:function(arg0, success, error) {
    	exec(success, error, "MediaPicker", "getMedias", [arg0]);
	},
	photoLibrary:function(arg0, success, error) {
    	exec(success, error, "MediaPicker", "photoLibrary", [arg0]);
	},
	takePhoto:function(arg0, success, error) {
    	exec(success, error, "MediaPicker", "takePhoto", [arg0]);
	},
	extractThumbnail:function(arg0, success, error) {
    	exec(success, error, "MediaPicker", "extractThumbnail", [arg0]);
	}，
	getOStype:function() {
		var u = navigator.userAgent; 
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端 
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		
	}	
	
};

module.exports = MediaPicker;