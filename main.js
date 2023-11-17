function startclassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/qqGJt5YHn/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResult(error, results)
{
    
}