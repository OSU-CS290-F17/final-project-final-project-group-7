/*Author: conner maddalozzo
*date: 11/25/17
*description.
*This program is the list grabber. it looks at "modals-list.html"
*desc: you add a title to the post and a header to the list.
you can add more list items, but there is a limit.
lets say LIMIT=6;
*
*/



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
  this.tags=document.getElementById('tag-input').value.split(" ");
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
function clickSubmit(){
  if(checkListFull()){
    alert("Please fill in your text for the post. the MAIN THING?");
    return;
  }
  if(document.getElementById('tag-input').value.split(" ").length<5){
    alert("Please fill in your TAGS also minimum of 5 tags man.,",
    " think \"How will people find my data???\" ");
    return;
  }
  if(!document.getElementById('title-input').value){
    alert("Fill in a title. make it stand out !:)");
    return;
  }
  //now we made sure they have all the right values.
  myPost=new newListPost();
  console.log("Hey you finally made your text post: here it is:::!", myPost);

/// almost like a cancle but it doesnt free the memory of the object
// and we dont send the object to the server.
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

/*
clears all the entrys
and make sures that that mypost object is null.

this ensures that te modal is blank. good practice.

*/
function cancel(){

    document.getElementById('tag-input').value="";
    document.getElementById('title-input').value="";
    document.getElementById('list-title-input').value="";

    //clean up the entries.
    var entries=document.getElementsByClassName('list-entry');
    var n=entries.length;
    for(var iter=0;iter<n;iter++){
      removeLastItem();
    }

    myPost=null;
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
}



// Here are he global variables, as well as the assigning of event listeners.
var LIMIT= 7;// almost an enviroment variable. the max numer of list items.
var myPost; // this will be the global instance of the new post object.
          // its global so it can be easily accessed.


/*requires
submit <button id="submit">
cancle <button id="cancel">
add itme <button id="add-item">
remove item <button id="remove-item">
*/
document.getElementById('remove-item').addEventListener('click',removeLastItem);
document.getElementById('add-item').addEventListener('click',addOneMoreItem);
document.getElementById('submit').addEventListener('click',clickSubmit);
document.getElementById('cancel').addEventListener('click',cancel);
