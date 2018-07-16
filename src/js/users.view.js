$(function(){
  $.get("src/templates/users.template.html").then(function(tmpl) {
    renderTemplateToContainer(tmpl);
  })
  function renderTemplateToContainer(tmpl){
    $.get("https://jsonplaceholder.typicode.com/users").then(function(usersList) {
      var compiledTmpl = _.template(tmpl)({ data: usersList});
      $("#dynamic-container").html(compiledTmpl);
    })
  }
});