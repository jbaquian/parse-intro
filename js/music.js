// Initialize Parse app
Parse.initialize('dp4ntvQvr1I1UJCP7F44YKvbyLydsftH23vyahL0', 'ceM2GnxceDQ1dmg76rdWwf4nkZl7e6rKN3QxaBmj')

// Create a new sub-class of the Parse.Object, with name "Music"
var Music =Parse.Object.extend('Music');

// Create a new instance of your Music class 
var sweetTune= new Music();

// Set a property 'band' equal to a band name
sweetTune.set('band', 'Not_real')
// Set a property 'website' equal to the band's website
sweetTune.set('website', 'www.not_real.com')
    
// Set a property 'song' equal to a song
sweetTune.set('song', 'No song')

// Save your instance of your song -- and go see it on parse.com!
sweetTune.save()

// Click event when form is submitted
$('form').submit(function() {

	// Create a new instance of your Music class 
	var iDontKnow = new Music();

	$(this).find('input').each(function() {
		iDontKnow.set($(this).attr('id'), $(this).val())
		$(this).val('')
		//same thing as below but shorter
	})
	// For each input element, set a property of your new instance equal to the input's value
	var band = $('#band').val()
	var website = $('#website').val()
	var song = $('#song').val()
	iDontKnow.set('band', band)
	iDontKnow.set('website', website)
	iDontKnow.set('song', song)
	//control shift d duplicates a line alt goes across lines and you can edit the all at once
//clear it out
	$('band').val('')
	$('website').val('')
	$('song').val('')
	// After setting each property, save your new instance back to your database
	iDontKnow.save()
	
	return false
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class


	// Set a parameter for your query -- where the website property isn't missing


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	
	// Loop through your data, and pass each element to the addItem function

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function

	
	// Append li that includes text from the data item


	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


