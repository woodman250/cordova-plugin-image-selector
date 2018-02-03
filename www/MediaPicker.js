var exec = require('cordova/exec');

var MediaPicker = {
    getMedias:function(arg0) {
		return new Promise(function(resolve, reject) {
			if(navigator.userAgent.match(/Android/i)){
				arg0.selectMode = 100;
				arg0.showThumbnail = true;
				exec(function(res){
						resolve(res);
					}, function(err){
						reject(err);
					}, "MediaPicker", "getMedias", [arg0]);
			}else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
				if (!arg0) {
					arg0 = {};
				}
	
				var params = {
					maximumImagesCount: arg0.maxSelectCount ? arg0.maxSelectCount : 9,
					width: arg0.width ? arg0.width : 0,
					height: arg0.height ? arg0.height : 0,
					quality: arg0.quality ? arg0.quality : 100
				};

				exec(function(res){
						var imgs = [];
						for(var i=0; i<res.length; i++){
							var obj = {};
							obj.path = res[i];
							imgs.push(obj);
						}
						resolve(imgs);
					}, function(err){
						reject(err);
					}, "ImagePicker", "getPictures", [params]);
			}
		});

	},
	photoLibrary:function(arg0, success, error) {
    	exec(success, error, "MediaPicker", "photoLibrary", [arg0]);
	},
	takePhoto:function(arg0, success, error) {
    	exec(success, error, "MediaPicker", "takePhoto", [arg0]);
	},
	extractThumbnail:function(arg0, success, error) {
    	exec(success, error, "MediaPicker", "extractThumbnail", [arg0]);
	}
	
};

module.exports = MediaPicker;