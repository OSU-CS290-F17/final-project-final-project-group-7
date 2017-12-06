/*
 * Applies the filters currently entered by the user to the set of all posts.
  Posts that don't satisfy the filters are
 * removed from the DOM.
 */
function doFilterUpdate() {
    
       // Get values of filters from user inputs.
      var filters = {
        title: document.getElementById('filter-title').value.trim(),
        date: document.getElementById('filter-date').value,
        tags: document.getElementById('filter-tags').value.trim(),
        conditions: []
      }
    
      var filterConditionCheckedInputs = document.querySelectorAll("#filter-condition input:checked");
      for (var i = 0; i < filterConditionCheckedInputs.length; i++) {
        filters.conditions.push(filterConditionCheckedInputs[i].value);
      }
    
    // Remove all "post" elements from the DOM.
      var postContainer = document.getElementById('posts');
      while(postContainer.lastChild) {
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
    
    