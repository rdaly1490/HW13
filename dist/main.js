$(document).on('ready', start);

function start(eventObj) {

var $like = $("#like");
counter = 0;

$like.on("click", countLikes);

function countLikes(e) {
	counter++;
	console.log(counter);
	if (counter === 1) {
		$like.html(counter + " like");
	}
	else {
		$like.html(counter + " likes");
	}
}

$like.css("height", "50px");
$like.css("width", "100px");
$like.css("backgroundColor", "gray");













}