var submit = document.getElementById('commentsubmit');
submit.onclick = function(){
  
  var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
  if(request.readyState === XMLHttpRequest.DONE)  {
      if(request.status == 200)
    {
    var comments = request.responseText;
    comments = JSON.parse(comments);
     var ul = '';
    for(var i=0;i<comments.length;i++){
        ul += '<li>' + commens[i] + '</li>';
    }
    var unlist = document.getElementById('unordered');
    unlist.innerHTML =  ul;
    
}  
      
  }
    };
    var nameValue = document.getElementById('commentid');
    var name = nameValue.value;
    request.open('GET','http://shaheermanuu.imad.hasura-app.io/submit-comment?name='+name,true);
    request.send(null);
 };

