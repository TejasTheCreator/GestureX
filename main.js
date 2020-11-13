Webcam.set(
{
width:350,
height:300,
image_format:'png',
png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src=" '+data_uri+'">'
    }

    );
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/MTNdiev5X/model.json', modelLoaded);

function modelLoaded()
{
    console.log("model loaded successfully!")
}

function check()
{
    img = document.getElementById("captured image");
    classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_name_of_gesture").innerHTML = results[0].label;
        document.getElementById("result_name_of_gesture2").innerHTML = results[1].label;

        if (results[0].label == "Love it!")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "✌️"
        }

        if (results[0].label == "Ok")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👌"
        }

        if (results[0].label == "Like")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👍"
        }

        if (results[0].label == "High-Five")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "🙌"
        }

        if (results[0].label == "Clap")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👏"
        }

        if (results[0].label == "Pray")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "🙏"
        }

        if (results[0].label == "Hi/Wave")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👋"
        }

        if (results[1].label == "Love it!")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "✌️"
        }

        if (results[1].label == "Ok")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👌"
        }

        if (results[1].label == "Like")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👍"
        }

        if (results[1].label == "High-Five")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "🙌"
        }

        if (results[1].label == "Clap")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👏"
        }

        if (results[1].label == "Pray")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "🙏"
        }

        if (results[1].label == "Hi/Wave")
        {
            document.getElementById("update_emoji_of_gesture").innerHTML = "👋"
        }
    }
}