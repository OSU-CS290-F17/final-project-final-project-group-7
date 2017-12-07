/*
 * A function to apply the current filters to a specific post.  Returns true
 * if the post passes the filters and should be displayed and false otherwise.
 */
function postPassesFilters(post, filters) {

    if (filters.title) {
      var postDescription = post.description.toLowerCase();
      var filterText = filters.text.toLowerCase();
      if (postDescription.indexOf(filterText) === -1) {
        return false;
      }
    }
    if( filters.date){

    }

    if(filters.tags)
    {
      var elemTags=post.getAttribute('data-tags').split(',');
      console.log("looks like you added some tags");
      for(var i=0;i<filters.tags.length;i++){
        for(var j=0;j<elemTags.length;j++){
          if(filters.tags[i].contains(elemTags[j])){
            console.log("==========\n===MATCH @ \n=",filters.tags[i], " matched with", elemTags[j],"\n ====nice!");
            return true;
          }
        }
      }
        return false;//didnt work out.
    }

      if(filters.type)
      {
        if(post.getAttribute('data-type')!=String(filters.type)){
          return false;
        }
      }

      return true;

  }






/*
 * Applies the filters currently entered by the user to the set of all posts.
  Posts that don't satisfy the filters are
 * removed from the DOM.
 */
function doFilterUpdate() {
  var allPostElems;
       // Get values of filters from user inputs.
      var filters = {
        title: document.getElementById('filter-title').value.trim(),
        date: document.getElementById('filter-date').value || null,
        tags: document.getElementById('filter-tags').value.trim(),
        type: document.getElementById('filter-type').value.trim()
      }

      var filterConditionCheckedInputs = document.querySelectorAll("#filter-condition input:checked");
      for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
        filters.conditions.push(filterConditionCheckedInputs[i].value);
      }

    // Remove all "post" elements from the DOM.
      var postContainer = document.getElementById('posts');
      while(postContainer.lastChild) {
        allPostElems.push(postContainer.lastChild);

        postContainer.removeChild(postContainer.lastChild);
      }

      /*
       * Loop through post elements and insert ones
       * that meet the current filtering*/
      allPostElems.forEach(function (postElem) {
        if (postPassesFilters(postElem, filters)) {
          postContainer.appendChild(postElem);
        }
      });

    }

    // Wait until the DOM content is loaded, and then hook up UI interactions, etc.
    window.addEventListener('DOMContentLoaded', function () {


    // get all the elements initioaly sisplayed in the DOM
      var postElems = document.getElementsByClassName('post');
      for (var i = 0; i < postElems.length; i++) {
        allPostElems.push(postElems[i]);
      }
    //implement filter button
      var filterUpdateButton = document.getElementById('filter-update-button');
      filterUpdateButton.addEventListener('click', doFilterUpdate)

    });
