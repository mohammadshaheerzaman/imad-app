var button = document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    var span = doucment.getElementById('count');
    
    counter = counter +1;
    span.innerHTML = counter;
}