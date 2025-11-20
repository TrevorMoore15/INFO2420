    PrintButton1 = new Image
	PrintButton2 = new Image
	logo1 = new Image
	logo2 = new Image
if (document.images) {
	PrintButton1.src = "../../Images_and_resources/print1.png"
	PrintButton2.src = "../../Images_and_resources/print2.png"
	logo1.src = "../../Images_and_resources/logo_1.png"
	logo2.src = "../../Images_and_resources/logo_2.png"
}



		var imgArray = new Array(
		    'CoupleBike3Lg.jpg',
			'CoupleHikingLg.jpg',
			'CoupleEveningLg.jpg',
			'CoupleSnowBoardLg.jpg'
			
			

		);


		var titleArray = new Array(
			'Couple Bike',
			'Couple Hiking',
			'Couple sunset',
			'Couple SnowBoard'
			
			
		);
			
		var imgPath = "../../Images_and_resources/Large/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}

		}
        function moveimage(img_name, img_src){
            document[img_name].src=img_src;
        }
		