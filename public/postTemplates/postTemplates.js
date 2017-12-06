(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['imgPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post img\" data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-tags="
    + alias4(((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data}) : helper)))
    + " data-date=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" date-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n    <img class=\"image-post\" src=\""
    + alias4(((helper = (helper = helpers.photoURL || (depth0 != null ? depth0.photoURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"photoURL","hash":{},"data":data}) : helper)))
    + "\" alt=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\r\n</div>\r\n";
},"useData":true});
templates['textPost'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post text\"  data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-tags="
    + alias4(((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data}) : helper)))
    + " data-date=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" date-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n    <p class=\"text-post\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p>\r\n</div>\r\n";
},"useData":true});
templates['listPost'] = template({"1":function(container,depth0,helpers,partials,data) {
    return "        <li>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</li>\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post list\"  data-type=\""
    + alias4(((helper = (helper = helpers.type || (depth0 != null ? depth0.type : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"type","hash":{},"data":data}) : helper)))
    + "\" data-tags="
    + alias4(((helper = (helper = helpers.tags || (depth0 != null ? depth0.tags : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"tags","hash":{},"data":data}) : helper)))
    + " data-date=\""
    + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
    + "\" date-title=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\">\r\n    <h2 class=\"list-title\">"
    + alias4(((helper = (helper = helpers.listTitle || (depth0 != null ? depth0.listTitle : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listTitle","hash":{},"data":data}) : helper)))
    + "</h2>\r\n    <ul class=\"list\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.text : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    </ul>\r\n</div>\r\n";
},"useData":true});
templates['imgModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"post-box\">\r\n  <div class=\"title-box\">\r\n    Create a new photo post\r\n    <br>\r\n    <input id=\"title-input\" type=\"text\" placeholder=\"Write a title:)\">\r\n  </div>\r\n\r\n  <div class=\"text-enter\">\r\n    <div class=\"preview-spacer\"></div>\r\n    <div class=\"preview\">\r\n    <img src=\"/preview.jpg\" id=\"image-preview\" /></div>\r\n\r\n\r\n    <div class=\"preview-label\">Press (Enter) to Preview:</div>\r\n    <div class=\"attach-bar\">\r\n      <div class=\"browse\">\r\n        <label>Browse for file:</label>\r\n        <input type=\"file\" id=\"file-input\" accept=\".png, .jpg, .jpeg\" class=\"browse-button\" >\r\n      </div>\r\n      <p> or </p>\r\n      <div class=\"url\">\r\n        <label>Add photo by URL:</label>\r\n        <input id=\"url-input\" class=\"enter-url\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tag-bar\">\r\n    <label for=\"tag-input\">Tags:</label>\r\n    <input class=\"add-tags-button\" type=\"text\" id=\"tag-input\" size=\"50\" placeholder=\"add tags here ex(cats,happy,goofy,young,cute)\">\r\n  </div>\r\n\r\n\r\n  <div class=\"under-bar\">\r\n    <button id=\"cancel\" onClick=\"closemodal()\" class=\"cancel-button\"> Cancel </button>\r\n    <div class=\"button-spacer\"> </div>\r\n    <button id=\"submit\" onClick=\"imgSubmit()\" class=\"submit-button\"> Submit </button>\r\n  </div>\r\n\r\n</div>\r\n";
},"useData":true});
templates['listModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"post-box\">\r\n  <div class=\"title-box\">\r\n    Create a new List post\r\n    <br>\r\n    <input id=\"title-input\" type=\"text\" placeholder=\"Write a title 4 tha post:)\">\r\n  </div>\r\n  <div class=\"text-enter\">\r\n\r\n      <div class=\"list-title\">\r\n          <input id=\"list-title-input\" type=\"text\" placeholder=\"List Title:)\">\r\n      </div>\r\n      <div class=\"list-contents\">\r\n        <ul id=\"list-input\">\r\n        </ul>\r\n      </div>\r\n\r\n      <button id=\"add-item\" onClick=\"addOneMoreItem()\" class=\"list-button\">More...</button>\r\n      <button id=\"remove-item\" onClick=\"removeLastItem()\" style=\"left: 50vw;\" class=\"list-button\" >Less...</button>\r\n  </div>\r\n    <div class=\"tag-bar\">\r\n      <label>Tags:</label>\r\n      <div class=\"tag-bar-spacer\"> </div>\r\n      <input class=\"add-tags-button\" type=\"text\" id=\"tag-input\" size=\"50\" placeholder=\"add tags here ex(ideas,good,LIST,quality,reasons)\">\r\n    </div>\r\n    <div class=\"under-bar\">\r\n      <button id=\"cancel\" onClick=\"closemodal()\" class=\"cancel-button submission\"> Cancel </button>\r\n      <div class=\"button-spacer\"> </div>\r\n      <button id=\"submit\" onClick=\"listSubmit()\" class=\"submit-button submission\"> Submit </button>\r\n    </div>\r\n\r\n  </div>\r\n";
},"useData":true});
templates['textModal'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"post-box\">\r\n  <div class=\"title-box\">\r\n    Create a new text post\r\n    <br>\r\n    <input id=\"title-input\" type=\"text\" placeholder=\"Write a title:)\">\r\n  </div>\r\n\r\n  <div class=\"text-enter\">\r\n    <textarea id=\"text-input\" value=\"\" class=\"text-in\"></textarea>\r\n  </div>\r\n  <div class=\"tag-bar\">\r\n    <label for=\"tag-input\">Tags:</label>\r\n    <input class=\"add-tags-button\" type=\"text\" id=\"tag-input\" size=\"50\" placeholder=\"add tags here ex(cats,happy,goofy,young,cute)\">\r\n\r\n  </div>\r\n  <div class=\"under-bar\">\r\n    <button id=\"cancel\" onClick=\"closemodal()\" class=\"cancel-button\"> Cancel </button>\r\n    <div class=\"button-spacer\"> </div>\r\n    <button id=\"submit\" onClick=\"textSubmit()\" class=\"submit-button\"> Submit </button>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();