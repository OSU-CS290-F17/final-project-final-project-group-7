/*
 * A function to apply the current filters to a specific post.  Returns true
 * if the post passes the filters and should be displayed and false otherwise.
 */
function postPassesFilters(post, filters) {

    if (filters.title) {
      console.log("what are we comparing",post);
      var postDescription = post.getAttribute('data-title').value.toLowerCase();
      var filterText = filters.title.toLowerCase();
      if (!postDescription.includes(filterText)) {
        return false;
      }
    }

    if(filters.tags)
    {
      console.log("checkking ", post);
      var elemTags=post.getAttribute('data-tags').split(',');
      console.log("looks like you added some tags");
      for(var i=0;i<filters.tags.length;i++){
        console.log("==========\n===ecking:",filters.tags[i]);
        for(var j=0;j<elemTags.length;j++){
          if(elemTags[j].includes(filters.tags[i])){
            //console.log("==========\n===MATCH @ \n=",filters.tags[i], " matched with", elemTags[j],"\n ====nice!");
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
       // Get values of filters from user inputs.
      var filters = {
        title: document.getElementById('filter-title').value.trim(),
        tags: document.getElementById('filter-tags').value.trim(),
        type: document.getElementById('filter-type').value.trim()
      }

      filters.tags=filters.tags.split(",");

      console.log("the tags in the filters", filters.tags);

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
    var allPostElems=[];
