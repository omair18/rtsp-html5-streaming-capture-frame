(function() {
    "use strict";
    var video, $output, $image;
    var scale = 1.0;
 
    var initialize = function() {
        $output = $("#output");
        $image = $("#image");
        video = $("#widget").get(0);
        $("#capture").click(captureImage);                

    };
 
    var captureImage = function() {
        var canvas = document.createElement("canvas");
        canvas.width = video.videoWidth * scale;
        canvas.height = video.videoHeight * scale;
        console.log(canvas.width);
        console.log(canvas.height);
        canvas.getContext('2d')
              .drawImage(video, 0, 0, canvas.width, canvas.height);
 
        var img = document.createElement("img");
        var imgg = document.getElementById("image");
        imgg.setAttribute('crossorigin', 'annonymous');
        // imgg.width = canvas.width;
        // imgg.height = canvas.height;
        imgg.src = canvas.toDataURL();

        var link = document.createElement('a');
        link.download = 'filename.png';
        link.href = canvas.toDataURL("image/png")
        link.click();
        // $output.prepend(img);
    }; 
 
    $(initialize);            
 
}());