var button = document.getElementById('counter');

button.onclick = function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
  if(request.readyState === XMLHttpRequest.DONE)  {
      if(request.status == 200)
    {
    var counter = request.responseText;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
    
}  
      
  }
    };
    
    request.open('GET','http://shaheermanuu.imad.hasura-app.io/counter',true);
    request.send(null);
};
    
//Submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
  
  var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
  if(request.readyState === XMLHttpRequest.DONE)  {
      if(request.status == 200)
    {
    var names = request.responseText;
    names = JSON.parse(names);
     var ul = '';
    for(var i=0;i<names.length;i++){
        ul += '<li>' + names[i] + '</li>';
    }
    var unlist = document.getElementById('unordered');
    unlist.innerHTML =  ul;
    
}  
      
  }
    };
    var nameValue = document.getElementById('name');
    var name = nameValue.value;
    request.open('GET','http://shaheermanuu.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
 };
