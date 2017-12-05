echo "i will now run the build script."

handlebars views/templates/imgPost.handlebars views/templates/textPost.handlebars views/templates/listPost.handlebars -f public/postTemplates/postTemplates.js
handlebars views/partials/imgModal.handlebars views/partials/textModal.handlebars views/partials/textModal.handlebars -f public/postTemplates/modaltemplates.js
