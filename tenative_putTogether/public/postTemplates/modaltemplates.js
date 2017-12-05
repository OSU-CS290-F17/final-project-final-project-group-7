(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['imgModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-post-box\">\r\n  <div class=\"title-box\">\r\n    Create a new photo post\r\n    <br>\r\n    <input id=\"title-input\" type=\"text\" placeholder=\"Write a title:)\">\r\n  </div>\r\n\r\n  <div class=\"text-enter\">\r\n    <div class=\"preview-spacer\"></div>\r\n    <div class=\"preview\">\r\n    <img src=\"\" id=\"image-preview\" /></div>\r\n\r\n\r\n    <div class=\"preview-label\">Press (Enter) to Preview:</div>\r\n    <div class=\"attach-bar\">\r\n      <div class=\"browse\">\r\n        <label>Browse for file:</label>\r\n        <input type=\"file\" id=\"file-input\" accept=\".png, .jpg, .jpeg\" class=\"browse-button\" >\r\n      </div>\r\n      <p> or </p>\r\n      <div class=\"url\">\r\n        <label>Add photo by URL:</label>\r\n        <input id=\"url-input\" class=\"enter-url\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tag-bar\">\r\n    <label for=\"tag-input\">Tags:</label>\r\n    <input class=\"add-tags-button\" type=\"text\" id=\"tag-input\" size=\"50\" placeholder=\"add tags here ex(cats happy goofy young cute)\">\r\n  </div>\r\n\r\n\r\n  <div class=\"under-bar\">\r\n    <button id=\"cancel\" class=\"cancel-button\"> Cancel </button>\r\n    <div class=\"button-spacer\"> </div>\r\n    <button id=\"submit\" class=\"submit-button\"> Submit </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"background-content\">\r\n\r\n</div>\r\n";
},"useData":true});
templates['textModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-post-box\">\r\n  <div class=\"title-box\">\r\n    Create a new text post\r\n    <br>\r\n    <input id=\"title-input\" type=\"text\" placeholder=\"Write a title:)\">\r\n  </div>\r\n\r\n  <div class=\"text-enter\">\r\n    <textarea id=\"text-input\" value=\"\" class=\"text-in\"></textarea>\r\n  </div>\r\n  <div class=\"tag-bar\">\r\n    <label for=\"tag-input\">Tags:</label>\r\n    <input class=\"add-tags-button\" type=\"text\" id=\"tag-input\" size=\"50\" placeholder=\"add tags here ex(cats happy goofy young cute)\">\r\n\r\n  </div>\r\n  <div class=\"under-bar\">\r\n    <button id=\"cancel\" class=\"cancel-button\"> Cancel </button>\r\n    <div class=\"button-spacer\"> </div>\r\n    <button id=\"submit\" class=\"submit-button\"> Submit </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"background-content\">\r\n\r\n</div>\r\n";
},"useData":true});
templates['textModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"text-post-box\">\r\n  <div class=\"title-box\">\r\n    Create a new text post\r\n    <br>\r\n    <input id=\"title-input\" type=\"text\" placeholder=\"Write a title:)\">\r\n  </div>\r\n\r\n  <div class=\"text-enter\">\r\n    <textarea id=\"text-input\" value=\"\" class=\"text-in\"></textarea>\r\n  </div>\r\n  <div class=\"tag-bar\">\r\n    <label for=\"tag-input\">Tags:</label>\r\n    <input class=\"add-tags-button\" type=\"text\" id=\"tag-input\" size=\"50\" placeholder=\"add tags here ex(cats happy goofy young cute)\">\r\n\r\n  </div>\r\n  <div class=\"under-bar\">\r\n    <button id=\"cancel\" class=\"cancel-button\"> Cancel </button>\r\n    <div class=\"button-spacer\"> </div>\r\n    <button id=\"submit\" class=\"submit-button\"> Submit </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"background-content\">\r\n\r\n</div>\r\n";
},"useData":true});
})();