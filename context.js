// var imgcr = document.createElement(img);

var imgs = document.getElementsByTagName("img");
var videos = document.getElementsByTagName("video");
// alert(imgs.length + videos.length);
img = imgs[1];
// alert(img.src);

async function loadModel(){
    var json = chrome.runtime.getURL('./models/model.json');
    chrome.storage.local.set({'model': json});
    const model = await tf.loadLayersModel('models/model.json');
}
