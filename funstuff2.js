var moviesArray = [
["1", "IT"],
["2", "Sinister"],
["3", "The Shining"],
["4", "Orphanage"],
["5", "The Grudge"],
["6", "Wrong turn dead end"]
];

var container = document.getElementById('moviescontainer');

// loop over the data
for(var i = 0; i < moviesArray.length; i++) {
	// for each speaker, add a new div to container (a.k.a speakerscontainer).
	//The new div will have the the second (index: 1) value of the speakers-array (the name) as content.
	container.innerHTML += "<div class='movies'>" + moviesArray[i][1] +
	"</div>";
}