
/*
function newImgPost

inputs: it observes the inputs on the DOM and recordes their values.
image url, or image file,tags,title.
outputs: this is the constructor for a new post.
descripion. using "get elemetn by id."
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
    this.photoURL=document.getElementById('url-input').value;
  }
  else{
    this.photoURL=document.getElementById('file-input').files[0];
  }
  // i think the tags should be recorded as an arrray. this should
  //make looking thru them easier.
  this.tags=document.getElementById('tag-input').value.split(",");
  this.title=document.getElementById('title-input').value;

  this.date="";
  this.date+=String(currDate.getDate())+" ";
  this.date+=String(currDate.getMonth())+" ";
  this.date+=String(currDate.getFullYear());

  console.log("when you made the post the date was ", this.date);

  closemodal();
}




/*
this function is what is assigned to the click event listener.
it will check if you filled in all the fields, then it will create an object with it

those parameters.

*/
function imgSubmit(){
  console.log("checking to submit now.")
  if(!document.getElementById('url-input').value && !document.getElementById('file-input')){
    alert("Please fill in your subbmission for the post... you know... the MAIN THING?");
    return;
  }
  if(document.getElementById('tag-input').value.split(",").length<5){
    alert("Please fill in your TAGS also minimum of 5 tags man., think \"How will people find my data???\" ");
    return;
  }
  if(!document.getElementById('title-input').value){
    alert("Fill in a title. make it stand out !:)");
    return;
  }
  //now we made sure they have all the right values.
  var myPost=new newImgPost();
  console.log("here we finally made it past the check", myPost);


  var posthtml=Handlebars.templates.imgPost(myPost);

  document.getElementById('posts').insertAdjacentHTML('beforeend',posthtml);
//// clean up the mess and reset the fields
  window.removeEventListener('keydown',preview);

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

/*this function grabs the list entries and returns an array of strings


requires:
<li><input type="text" class="list-entry"></li>
*/
function grabEntries(){
  var arr=[];
  var items=document.getElementsByClassName('list-entry');
  for (var iter=0;iter<items.length;iter++){
    arr.push(items[iter].value);
  }

  return arr;

}






/*function newListPost

inputs: it observes the inputs on the DOM and recordes their values.
text,tags,title.

outputs: this is the constructor for a new list Post

description. using "get elemetn by id."
the javascript will create an object with those values.

.h
newListPost={
  type: "" image/text/list
  title: "" title for the post
  listTitle: "" actual shown title declaring the list
  text: []   array of list entries
  tags: [] array of tags
  date: "" day month year parsed by spaces

}

requires

listTitle <input id="list-title-input" type="text">
postTitle <input id="title-input" type="text">
tags <input id="tag-input" type="text">
*/
function newListPost(){
  var currDate=new Date();


  this.type="list";
  this.text=grabEntries();// the text will be an array of strings, because each list entry is a string.
  this.listTitle=document.getElementById('list-title-input').value;
  // i think the tags should be recorded as an arrray. this should
  //make looking thru them easier.
  this.tags=document.getElementById('tag-input').value.split(",");
  this.title=document.getElementById('title-input').value;

  this.date="";
  this.date+=String(currDate.getDate())+" ";
  this.date+=String(currDate.getMonth())+" ";
  this.date+=String(currDate.getFullYear());

  console.log("when you made the post the date was ", this.date);
}



//goes through all the list elements and make sure they are full of characters.
////
//** a list is full if it has more than - 3 - characters.
// requires list entries = <input class="list-entry">
function checkListFull(){
  var entries=document.getElementsByClassName('list-entry');
  for(var iter=0;iter<entries.length;iter++){
    console.log(entries[iter].value);
    if(entries[iter].value.length<4){//if ANY of the entries are blank, refuse service.
    alert("HEY you need to fill in ALL of those list entries ! ¯¯̿̿¯̿̿'̿̿̿̿̿̿̿'̿̿'̿̿̿̿̿'̿̿̿)͇̿̿)̿̿̿̿ '̿̿̿̿̿̿\̵͇̿̿\=(•̪̀●́)=o/̵͇̿̿/'̿̿ ̿ ̿̿")    }
    return 0;// we reached a hitch adn we need to pull out.
  }

return 1;// this means we went thru the list and they all were full of content.
}


/*
this function is what is assigned to the click event listener.
it will check if you filled in all the fields,
then  IF they are present, it will create the newList obejct.
those parameters.

*/
function listSubmit(){
  console.log('checking the list now.')

  if(checkListFull()){
    alert("Please fill in your text for the post. the MAIN THING?");
    return;
  }
  if(document.getElementById('tag-input').value.split(",").length<5){
    alert("Please fill in your TAGS also minimum of 5 tags man.,",
    " think \"How will people find my data???\" ");
    return;
  }
  if(!document.getElementById('title-input').value){
    alert("Fill in a title. make it stand out !:)");
    return;
  }
  //now we made sure they have all the right values.
var myPost=new newListPost();
  console.log("Hey you finally made your text post: here it is:::!", myPost);

  var posthtml=Handlebars.templates.listPost(myPost);

  document.getElementById('posts').insertAdjacentHTML('beforeend',posthtml);


//clean up the entries.

closemodal();
}

/*
clears all the entrys
and make sures that that mypost object is null.

this ensures that te modal is blank. good practice.

*/
function listcancel(){

    document.getElementById('tag-input').value="";
    document.getElementById('title-input').value="";
    document.getElementById('list-title-input').value="";

    //clean up the entries.
    var entries=document.getElementsByClassName('list-entry');
    var n=entries.length;
    for(var iter=0;iter<n;iter++){
      removeLastItem();
    }
}

/*adds one more item to the <ul>
the event listener on the "more..." button is assigned to this.

adds a new item to this.

*/
function addOneMoreItem(){
  console.log("===\nADDING ITEM\n===");

  if(document.getElementsByClassName('list-entry').length<LIMIT){

      var newLi=document.createElement('li');
      var input=document.createElement('input');

      input.setAttribute('type','text');
      input.setAttribute('placeholder','bulleted list entry here');
      input.setAttribute('size','20');
      input.classList.add("list-entry");
      newLi.appendChild(input);
      document.getElementById('list-input').appendChild(newLi);
}
else{
  alert(String("d[ o_0 ]b Simon Says you cant have more than " + LIMIT +" list items."));
  return;
}
}

/* removese the last item from the list,
if there are none to remove it will alert user

requires:
<ul id="list-input">
*/
function removeLastItem(){

    console.log("===\nremoving ITEM\n===");
  var list=document.getElementById('list-input');
  if(document.getElementsByClassName('list-entry').length>0){// if there are any to remove
    list.removeChild(list.lastChild);
  }
  else{
    alert(String("Woah slow down there, dont be so tap happy on that button. \n you can only remove"+
    " entries if there are some to remove. \'\'\'⌐(ಠ۾ಠ)¬\'\'\' "));
  }
}/*function newTextPost

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
  this.tags=document.getElementById('tag-input').value.split(",");
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
function textSubmit(){
  if(document.getElementById('text-input').value.length<5){
    alert("Please fill in your text for the post. the MAIN THING?");
    return;
  }
  if(document.getElementById('tag-input').value.split(",").length<5){
    alert("Please fill in your TAGS also minimum of 5 tags man., think \"How will people find my data???\" ");
    return;
  }
  if(!document.getElementById('title-input').value){
    alert("Fill in a title. make it stand out !:)");
    return;
  }
  //now we made sure they have all the right values.
  var myPost=new newTextPost();
  var posthtml=Handlebars.templates.textPost(myPost);

  document.getElementById('posts').insertAdjacentHTML('beforeend',posthtml);

  closemodal();

}








/*
inserts the modal into the DOM*/
function newImgModal(){
console.log("thank your for choosing images.");
//var modal2=Handlebars.compile();


var modal=Handlebars.templates.imgModal();
document.getElementById('modal-box').classList.remove('hidden');
console.log(modal);
document.getElementById('modal-box').insertAdjacentHTML('beforeend',modal);
///now ive made the modal, and successfully put it into the dom.
// now i add some temporary event listeners.
window.addEventListener('keydown', preview);
}


function newListModal(){

var modal=Handlebars.templates.listModal();
document.getElementById('modal-box').classList.remove('hidden');
document.getElementById('modal-box').insertAdjacentHTML('beforeend',modal);
}

function newTextModal(){


var modal=Handlebars.templates.textModal();
document.getElementById('modal-box').classList.remove('hidden');
document.getElementById('modal-box').insertAdjacentHTML('beforeend',modal);
}

console.log("why cant iclick my buttons");

/*here it take care of the suff.*/
function closemodal(){
  
      document.getElementById('modal-chooser').classList.add('hidden');
      document.getElementById('modal-box').classList.add('hidden');
      document.getElementById('modal-background-content').classList.add('hidden');

      //remember to remove the html of the post box.
      document.getElementsByClassName('post-box')[0].remove();
    }


function choosemodal(){
  console.log('show modal choice')
  document.getElementById('modal-chooser').classList.remove('hidden');
  document.getElementById('modal-background-content').classList.remove('hidden');

  }

var LIMIT=7;
//document.getElementById('choose-image').addEventListener('click',addPost);
document.getElementById('add-post').addEventListener('click',choosemodal);
document.getElementById('close-modallist').addEventListener('click',closemodal);
document.getElementById('choose-image').addEventListener('click',newImgModal);
document.getElementById('choose-text').addEventListener('click',newTextModal);
document.getElementById('choose-list').addEventListener('click',newListModal);
