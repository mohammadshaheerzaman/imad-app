var submit = document.getElementById('commentsubmit');
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
    var nameValue = document.getElementById('commentid');
    var name = nameValue.value;
    request.open('GET','http://shaheermanuu.imad.hasura-app.io/articleName?name='+name,true);
    request.send(null);
 };

