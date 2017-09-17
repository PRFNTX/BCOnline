$("ul").css("name","value");
//add all properties in an object
var styles={
    color: "red",
    backgroundColor: "pink",
    border: "2px solid purple"
}
$("ul").css(styles);

//style multiple at once
$("li").css("color","blue"); //all li's in the list will be styled.

// Some things
$("thing").text() //returns text
$("thing").text("new text") // changes and returns text (html?)

$("thing").html() //returns html
$("thing").html("<a> n html thing </a>") //returns html

$("thing").attr("src", "link") //changes attribute
$("thing").attr("type", " new type ") //changes attribute

$("things").last().attr("thing", "thing") //.last() selects last

$("things").val() //returns value of a field
$("things").val("new value") //changes value of a field

$("things").addClass("class");
$("things").removeClass("class");
$("things").toggleClass("class");

//EVENTS (most important)
//click()
//keypress()
//on()

$("things").click(function(){});
$("things").click(function(){
    $(this).css("background","this")  //JQUERY MUST BE RUN ON JQUERY OBJECTS. this -> $(this)
})

$("things").keypress() //returns the entered key value (shift-a equals A)
$("things").keyup()
$("things").keydown()

$("things").keypress(function(){
    console.log("key pressed")
})

$("things").keypress(function(event){
    console.log(event); //event contains info
})
$("things").keypress(function(event){
    console.log(event); //event contains info
    if (event.which===13){
        alert("pressed enter")
    }
})

$("things").on(); //specify event, and what to do with it.
$("things").on("click", function(){})
$("things").on("dragstart", function(){})
// .click() works on all elements of the specified type currently on the page
// .on() will work for any objects added later as well

$("things").fadeOut(1000, function(){alert("called on finish")});
//.remove() to remove from page, otherwise the object is just hidden
//fadeIn also exists
//fadeToggle() is a thing too

//slideUp(), slideDown(), slideToggle(), changes height from/to 0 instead of changing visibility
