DieRoles = {};

DieRoles.render = function(){

  var elements = $();

  var parsed = decodeURIComponent(window.location.href)

  // HINT: change this to get the roles from the server somehow.
  var roles = parsed;

  roles.forEach(function(role){
    elements = elements.add($('<li>').text(role));
  });

  return elements;
};

$(function(){
  $('.die-roles').html(DieRoles.render());
});
