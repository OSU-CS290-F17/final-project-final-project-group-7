/*Author: conner maddalozzo
*date: 11/24/17
*description. tis program works with the text post addeer html
* it scans the inputs and appends them to an object. (myPost)
*
*
*/







/*function newTextPost

inputs: it observes the inputs on the DOM and recordes their values.
text,tags,title.

outputs: this is the constructor for a new post.

description. using "get elemetn by id."
the javascript will create an object with those values.

.h
newTextPost={

  type: "" image / text / list
  title: "" a title to be linked with the post
  text: "" text representign the post
  tags: [] array of text
  date: "" day month year parsed by spaces

}

requries

text <input id="text-input" type="text" >
postTitle <input id="title-input" type="text">
tags <input id="tag-input" type="text">
*/
function newTextPost(){
  var currDate=new Date();


  this.type="text";
  this.text=document.getElementById('text-input').value;
  // i think the tags should be recorded as an arrray. this should
  //make looking thru them easier.
  this.tags=document.getElementById('tag-input').value.split(" ");
  this.title=document.getElementById('title-input').value;

  this.date="";
  this.date+=String(currDate.getDate())+" ";
  this.date+=String(currDate.getMonth())+" ";
  this.date+=String(currDate.getFullYear());

  console.log("when you made the post the date was ", this.date);
}




/*
this function is what is assigned to the click event listener.
it will check if you filled in all the fields, then it will create an object with it

those parameters.

*/
function clickSubmit(){
  if(document.getElementById('text-input').value.length<5){
    alert("Please fill in your text for the post. the MAIN THING?");
    return;
  }
  if(document.getElementById('tag-input').value.split(" ").length<5){
    alert("Please fill in your TAGS also minimum of 5 tags man., think \"How will people find my data???\" ");
    return;
  }
  if(!document.getElementById('title-input').value){
    alert("Fill in a title. make it stand out !:)");
    return;
  }
  //now we made sure they have all the right values.
  myPost=new newTextPost();
  console.log("Hey you finally made your text post: here it is:::!", myPost);


  document.getElementById('text-input').value="";
  document.getElementById('tag-input').value="";
  document.getElementById('title-input').value="";
}

/*
clears all the entrys
and make sures that that mypost object is null. this ensures
that we dont grab half completed object or someting.

*/
function cancel(){

    document.getElementById('text-input').value="";
    document.getElementById('tag-input').value="";
    document.getElementById('title-input').value="";

    myPost=null;
}



// Here are he global variables, as well as the assigning of event listeners.

var myPost; // this will be the global instance of the new post object.
          // its global so it can be easily accessed.

document.getElementById('submit').addEventListener('click',clickSubmit);
document.getElementById('cancel').addEventListener('click',cancel);
