
var trackPlaying = false;
var colors = ['#369996','#f9cb00', '#f56a41', '#3A1E25', '#A8E256', '#45C9AF', '#BFCDDE', '#8ea998', '#e7dfae', '#978d4f', '#4b3414','#c58e4d', '#c1f266', '#89c779', '#6e718a', '#754264', '#662742', '#eb5a79', '#b0a392', '#aab8ab', '#d4cfb9', '#f1f5e4', '#ffffbe', '#feda9b', '#bca38d', '#818387'];
var id= 'abcdefghijklmnopqrstuvwxyz';


Array.range= function(a, b, step){
    var A= [];
    if(typeof a== 'number'){
        A[0]= a;
        step= step || 1;
        while(a+step<= b){
            A[A.length]= a+= step;
        }
    }
    else{
        var s= 'abcdefghijklmnopqrstuvwxyz';
        if(a=== a.toUpperCase()){
            b=b.toUpperCase();
            s= s.toUpperCase();
        }
        s= s.substring(s.indexOf(a), s.indexOf(b)+ 1);
        A= s.split('');        
    }

    console.log(A);
    return A;
}

//When the document is ready... 
$('document').ready(function(){
 	console.log("I'm ready!");

	//Search begins when user pressed enter: 
 	$('#button').click(function(e){
 		e.preventDefault();
		console.log("clicked");
		
		//display term in the console
		var term = $('#enter').val();
	
		//function to make api request
		searchSound(term);
		return false;
	});
 });

//searching for the tracks for the keyboard: 
function searchSound(term)
{
	console.log(term);

	var soundKey = '8e9b67219481558edf2e19f9b916899d51852b04';
	var soundURL = 'http://www.freesound.org/api/sounds/search?q=' + term + '&api_key=' + soundKey;

	$.ajax({
		url: soundURL,
		type: 'GET',
		dataType: 'json',

		error: function(error){
			console.log("oh god why");
			console.log(error);
		}, 

		success: function(dataI){
			console.log("yay");
			console.log(dataI);

			var soundArray = dataI.sounds;
			console.log(soundArray.length);

			var curKeyNum = 65;	

			for (var i=0; i < soundArray.length; i++){
				var url = soundArray[i]['preview-hq-mp3'];
				makeHowl(url, curKeyNum);
				curKeyNum++;
			}
		}
	});
}

//function to link the mp3's to the keys
function makeHowl(theURL, curKeyNum)
{
	var howl = new Howl( {urls: [theURL] } );

// When a key is pressed, the key plays the sound 
// assigned to it via the soundArray.

	$(document).keydown(function(e){
		if(e.which === curKeyNum){
			if (!trackPlaying){
				howl.play();
				trackPlaying = true;			
			}
		}
	});
}

	//Button CSS interaction
 	$(document).keydown(function(e) {
		console.log('Key Down!');
		console.log('this is No.1', e, String.from);
		console.log('this is No.2', e.which);

		// Get color on the keys when keys are pressed down
		if(e.which >= 65 && e.which <= 90){
			// $('.invisible').css('font-size', '20px');
			console.log('im in the right place',String.fromCharCode(e.which).toLowerCase());
			$('#' + String.fromCharCode(e.which).toLowerCase()).css('background-color', colors[e.which-65]);
			$('#' + String.fromCharCode(e.which).toLowerCase()).css('font-size', '20px');
		} else if (e.which === 16){
				console.log("Mute pressed");
				$('#mute').css("background-color","#F7EEDD");
				$('.invisible').css("background-color","white");
				$('.invisible').css('font-size', '0px');
				trackPlaying = false;			
			}
	});

	$(document).keyup(function(e){
		console.log('Key Up!');
		console.log(e);
		console.log(e.which);
		//delete keys[e.which];

		if(e.which >= 65 && e.which <= 90){
			// all keys return to invisibility after key up
			console.log("unpressed");
			$('.invisible').css("background-color","white");
			$('.invisible').css('font-size', '0px');
			} 
	});