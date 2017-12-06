/*Author: conner maddalozzo
*date: 11/24/17
*description. tis program works with the image post addeer html
* it scans the inputs and appends them to an object. (myPost)
*
*
*/


/*function newImgPost

inputs: it observes the inputs on the DOM and recordes their values.
image url, or image file,tags,title.

outputs: this is the constructor for a new post.

description. using "get elemetn by id."
the javascript will create an object with those values.


to preview the post.. press enter


.h
newImgPost={

  type: "" image / text / list
  title: "" a title to be linked with the post
  image: "" || file --- a url link or the file ---
  tags: [] array of text
  date: "" day month year parsed by spaces

}

requries

img <input id="url-input" type="text">
img <input id="file-input" type="file"
postTitle <input id="title-input" type="text">
tags <input id="tag-input" type="text">
*/
function newImgPost(){
  var currDate=new Date();


  this.type="image";

  if(document.getElementById('url-input').value){
    this.img=document.getElementById('url-input').value;
  }
  else{
    this.img=document.getElementById('file-input').files[0];
  }
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
  if(!document.getElementById('url-input').value && !document.getElementById('file-input')){
    alert("Please fill in your subbmission for the post... you know... the MAIN THING?");
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
  myPost=new newImgPost();
  console.log("Hey you finally made your text post: here it is:::!", myPost);


//// clean up the mess and reset the fields
  document.getElementById('url-input').value="";

  document.getElementById('tag-input').value="";
  document.getElementById('title-input').value="";
}

/*
clears all the entrys
and make sures that that mypost object is null. this ensures
that we dont grab half completed object or someting.

*/
function cancel(){

  document.getElementById('url-input').value="";
  document.getElementById('tag-input').value="";
  document.getElementById('title-input').value="";

    myPost=null;
}

/*
function preview,
when the enter key is pressed, this is what toggles the preview
of the image. that is if ther is a source specified,


requires:

preview = <any id="image-preview">
*/
function preview(evt){

  if(evt.key=="Enter"){
  console.log("===\n=ENTER HIT\n===");

  if(document.getElementById('url-input').value){
   document.getElementById('image-preview').setAttribute('src',document.getElementById('url-input').value);
   }
  else{
    console.log("looks liek we are previewing the uploaded image.", document.getElementById('file-input').files[0]);
    document.getElementById('image-preview').setAttribute('src',document.getElementById('file-input').files[0]);
  }
}
else{
  return;
}

}







// Here are he global variables, as well as the assigning of event listeners.

var myPost; // this will be the global instance of the new post object.
          // its global so it can be easily accessed.

window.addEventListener('keydown',preview);
