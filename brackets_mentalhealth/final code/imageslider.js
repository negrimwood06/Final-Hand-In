//var img = document.getElementById('img');
//
//    var images = ['imgslider/image1.jpg', 'imgslider/image2.jpg', 'imgslider/image3.jpg', 'imgslider/image4.jpg' 'imgslider/image5.jpg', 'imgslider/image6.jpg', 'imgslider/image7.jpg', 'imgslider/image8.jpg', 'imgslider/image9.jpg'];
//
//    var x = 0;
//
//    function slide(){
//        if(x<images.length) {
//            
//            x = x+1;
//            
//        }else{
//            x = 1;
//        }
//        
//        img.innerHTML = "<img src="+images[x-1]+">";
//    }
//
////    auto slide
//
//    setInterval(slide, 2000);
   var img = document.getElementById('img');

//the images i am using
    var images = ['imgslider/image1.jpg', 'imgslider/image2.jpg', 'imgslider/image3.jpg', 'imgslider/image4.jpg', 'imgslider/image5.jpg', 'imgslider/image6.jpg', 'imgslider/image7.jpg', 'imgslider/image8.jpg', 'imgslider/image9.jpg'];

    var x = 0;

//this function is for going through the different images
    function slide(){
        if(x<images.length) {
            // making sure x is within the range of the images array
            x = x+1;
            // Restarting to the first image when x meets the set length
        }else{
            x = 1;
        }
        //displaying the image on the screen
        img.innerHTML = "<img src="+images[x-1]+">";
    }

//    changing the image every 2000millisecond
    setInterval(slide, 2000);