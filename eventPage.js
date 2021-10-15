async function loadModel(){
    var json = chrome.runtime.getURL('./models/detec_porn_violence.json')
    chrome.storage.local.set({'model': json})
    const model = await tf.loadLayersModel('models/detec_porn_violence.json')
}