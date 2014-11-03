
var trackPlaying = false;

//searching for the tracks for the keyboard: 
function searchSound(term){
	console.log(term);

	var soundKey = '8e9b67219481558edf2e19f9b916899d51852b04';
	var soundURL = 'http://www.freesound.org/apiv2/search/text/?query=' 
	+ term + '&token=' + soundKey;

	$.ajax({
		url: soundURL,
		type: 'GET',
		dataType: 'json',

		error: function(data){
			console.log("oh god why");
		}, 

		success: function(data){
			console.log("yay");
			console.log(data);
		}
	})
}

// 	var id = data.id;
// 	var username = data.username;

// 	// // parsing the silly part that was missing from the API needed to play a sound. 
 //        url: 'freesound.org/people/' + username + '/sounds/' + id + '/',
 //        type: "post",
 //        dataType: "form_data",

 //        error: function(data){
 //        	console.log("oh god why");
 //        },

 //        success: function(response)
 //        {
 //        	//hopefully responses will appear here.
 //            console.log(response);
	// 	}

	//     var json_obj = $.parseJSON(response);//parse JSON
            
 //            var output="<ul>";
 //            for (var i in json_obj) 
 //            {
 //                output+="<li>" + json_obj[i].Language + ",  " + json_obj[i].ID + "</li>";
 //            }
 //            output+="</ul>";
            
 //            $('span').html(output);
 //        },

 //        dataType: "json"//set to JSON    


	// 		//URL TO CONNECT SOUND TO KEYPRESSES. 
	// 		var url = 'www.freesound.org/data/previews/' 
	// 		+ (firsttwoorthreenumbersofusername) + id + '_'
	// 		+ randomnumberidk + '-lq.mp3';

 // www.freesound.org/data/previews/(firsttwoorthreeidnumber)/id_(randomnumber)-lq.mp3


//When the entire document is ready and the search is entered.
//Look for the sound and map them to keypresses. 

 $('document').ready(function(){
 	console.log("I'm ready!");

	//when search begins: 
 	$('#button').click(function(){
	console.log("clicked");
	var term = $('#enter').val();

	//function to make api request
		searchSound(term);
	});

//Mapping keypresses to sounds. 

	//Track 1 : A 
	var scarf = new Howl({urls: 
		['http://freesound.org/data/previews/62/62217_614053-lq.mp3', 
		'scarf.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			scarf.play();
			trackPlaying = true;			
		}
	});

	//Track 2 : S
	var whistle = new Howl({urls: ['whistle.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			whistle.play();
			trackPlaying = true;			
		}
	});

	//Track 3 : D
	var sing = new Howl({urls: ['sing.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			sing.play();
			trackPlaying = true;			
		}
	});

	//Track 4 : F 
	var lantern = new Howl({urls: ['lanterns.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			lantern.play();
			trackPlaying = true;			
		}
	});

	//Track 5 : U
	var transit = new Howl({urls: ['transition.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			transit.play();
			trackPlaying = true;			
		}
	});


	//Track 6 : I
	var desert = new Howl({urls: ['desert.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			desert.play();
			trackPlaying = true;			
		}
	});

	//Track 7 : O
	var whale = new Howl({urls: ['whale.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			whale.play();
			trackPlaying = true;			
		}
	});

	//Track 8 : P
	var born = new Howl({urls: ['born.mp3']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			born.play();
			trackPlaying = true;			
		}
	});

	//Track 9 : N
	var choir = new Howl({urls: ['choir.wav']});
	$('#btn').on('click', function(){
		if (!trackPlaying){
			choir.play();
			trackPlaying = true;			
		}
	});

	//Track 10 : Space
	var backTrack = new Howl({
		urls: ['levi.mp3']
	});

	$('#btn').on('click', function(){
		if (!trackPlaying){
			backTrack.play();
			trackPlaying = true;			
		}
	});

	// When KEYDOWN : Play Sound

	$(document).keydown(function(e) {

		console.log('Key Down!');
		console.log(e);
		console.log(e.which);

		// A is pressed
		if(e.which === 65){
			console.log("A is pressed");
			$('#a').css("background-color","#FAFADE");
			$('#a').css('font-size', '20px');

			if (!trackPlaying){
				scarf.play();
				trackPlaying = true;
			}
		}

		// B

		// C

		// D is pressed
		if(e.which === 68){
			console.log("D is pressed");
			$('#d').css("background-color","#4F5D61");
			$('#d').css('font-size', '20px');

			if (!trackPlaying){
				sing.play();
				trackPlaying = true;
			}
		}

		// E 

		// F is pressed
		if(e.which === 70){
			console.log("F is pressed");
			$('#f').css("background-color","#3C4B57");
			$('#f').css('font-size', '20px');

			if (!trackPlaying){
				lantern.play();
				trackPlaying = true;
			}
		}

		//

		// S is pressed
		if(e.which === 83){
			console.log("S is pressed");
			$('#s').css("background-color","#A8E256");
			$('#s').css('font-size', '20px');

			if (!trackPlaying){
				whistle.play();
				trackPlaying = true;
			}
		}

		// U is pressed
		if(e.which === 85){
			console.log("U is pressed");
			$('#u').css("background-color","#86DEDD");
			$('#u').css('font-size', '20px');

			if (!trackPlaying){
				transit.play();
				trackPlaying = true;
			}
		}

		// I is pressed
		if(e.which === 73){
			console.log("I is pressed");
			$('#i').css("background-color","#C8F0A9");
			$('#i').css('font-size', '20px');

			if (!trackPlaying){
				desert.play();
				trackPlaying = true;
			}
		}

		// O is pressed
		if(e.which === 79){
			console.log("O is pressed");
			$('#o').css("background-color","#45C9AF");
			$('#o').css('font-size', '20px');

			if (!trackPlaying){
				whale.play();
				trackPlaying = true;
			}
		}

		// P is pressed
		if(e.which === 80){
			console.log("P is pressed");
			$('#p').css("background-color","#049792");
			$('#p').css('font-size', '20px');

			if (!trackPlaying){
				born.play();
				trackPlaying = true;
			}
		}

		// N is pressed
		if(e.which === 78){
			console.log("N is pressed");
			$('#n').css("background-color","#FDF5CD");
			$('#n').css('font-size', '20px');

			if (!trackPlaying){
				choir.play();
				trackPlaying = true;
			}
		}

		//spacebar pressed
		if(e.which === 32){
			console.log("Spacebar activated");	
			$('#space').css("background-color","#BFCDDE");
			$('#space').css('font-size', '20px');

			if (!trackPlaying){
				backTrack.play();
				trackPlaying = true;

			}
		}

		//spacebar pressed
		if(e.which === 77){
			console.log("Mute activated");	
			$('#mute').css("background-color","#3A1E25");

		// Yes, very hard-coded... TL;DR : everybody silence and
		// go back to being invisible! 

				//A
				backTrack.stop();
				$('#a').css("background-color","white");
				$('#a').css('font-size', '0px');

				//S
				choir.stop();
				$('#s').css("background-color","white");
				$('#s').css('font-size', '0px');

				//D
				born.stop();
				$('#d').css("background-color","white");
				$('#d').css('font-size', '0px');

				//F
				whale.stop();
				$('#f').css("background-color","white");
				$('#f').css('font-size', '0px');

				//U
				desert.stop();
				$('#u').css("background-color","white");
				$('#u').css('font-size', '0px');

				//I
				transit.stop();
				$('#i').css("background-color","white");
				$('#i').css('font-size', '0px');

				//O
				lantern.stop();
				$('#o').css("background-color","white");
				$('#o').css('font-size', '0px');

				//P
				sing.stop();
				$('#p').css("background-color","white");
				$('#p').css('font-size', '0px');

				//N
				whistle.stop();
				$('#n').css("background-color","white");
				$('#n').css('font-size', '0px');

				//Space
				scarf.stop();
				$('#space').css("background-color","white");
				$('#space').css('font-size', '0px');

		}
});

	// When KEYUP : Stop 

	//when users release the key, the key is cleared. 
	$(document).keyup(function(e) {
		console.log('Key Up!');
		console.log(e);
		console.log(e.which);
		//delete keys[e.which];

		// A 
		if(e.which === 65){ //spacebar
			console.log("A unpressed");
			$('#a').css("background-color","white");
			$('#a').css('font-size', '0px');

			if (trackPlaying){
				scarf.stop();
				trackPlaying = false;
			}
		}

		// S
		if(e.which === 83){ //spacebar
			console.log("S unpressed");
			$('#s').css("background-color","white");
			$('#s').css('font-size', '0px');

			if (trackPlaying){
				whistle.stop();
				trackPlaying = false;
			}
		}

		// D
		if(e.which === 68){ //spacebar
			console.log("D unpressed");
			$('#d').css("background-color","white");
			$('#d').css('font-size', '0px');

			if (trackPlaying){
				sing.stop();
				trackPlaying = false;
			}
		}

		// F
		if(e.which === 70){ //spacebar
			console.log("F unpressed");
			$('#f').css("background-color","white");
			$('#f').css('font-size', '0px');

			if (trackPlaying){
				lantern.stop();
				trackPlaying = false;
			}
		}

		// U is pressed
		if(e.which === 85){ //spacebar
			console.log("U unpressed");
			$('#u').css("background-color","white");
			$('#u').css('font-size', '0px');

			if (trackPlaying){
				transit.stop();
				trackPlaying = false;
			}
		}

		// I is pressed
		if(e.which === 73){ //spacebar
			console.log("I unpressed");
			$('#i').css("background-color","white");
			$('#i').css('font-size', '0px');

			if (trackPlaying){
				desert.stop();
				trackPlaying = false;
			}
		}

		// O is pressed

		if(e.which === 79){ //spacebar
			console.log("O unpressed");
			$('#o').css("background-color","white");
			$('#o').css('font-size', '0px');

			if (trackPlaying){
				whale.stop();
				trackPlaying = false;
			}
		}

		// P is pressed
		if(e.which === 80){ //spacebar
			console.log("P unpressed");
			$('#p').css("background-color","white");
			$('#p').css('font-size', '0px');

			if (trackPlaying){
				born.stop();
				trackPlaying = false;
			}
		}

		// N is pressed
		if(e.which === 78){ //spacebar
			console.log("N unpressed");
			$('#n').css("background-color","white");
			$('#n').css('font-size', '0px');

			if (trackPlaying){
				choir.stop();
				trackPlaying = false;
			}
		}

		// SPACE
		if(e.which === 32){ //spacebar
			console.log("Spacebar unpressed");
			$('#space').css("background-color","white");
			$('#space').css('font-size', '0px');

			if (trackPlaying){
				backTrack.stop();
				trackPlaying = false;
			}
		}

		// if MUTE is pressed, silence shall be had.
		if(e.which === 77){ //spacebar
			console.log("Mute unpressed");
			$('#mute').css("background-color","#F7EEDD");
			}
	});

});
