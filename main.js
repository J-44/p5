function preload(){
    img = loadImage("272-2720888_bird-cartoon-drawing-clip-art-animated-picture-of-bird.png");
    }
    function setUp(){
    canvas = createCanvas(300, 300);
        canvas.center();
    }
    function draw(){
        circle(90,10,20);
    }
    Webcam.set({
        width : 300,
        height : 300,
        image_format : 'png',
        png_quality : 90
    });
    cam = document.getElementById("cam");
    Webcam.attach('#cam');
    function take() {
        Webcam.snap(function (data_uri) {
            document.getElementById("shot").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
        });
    }