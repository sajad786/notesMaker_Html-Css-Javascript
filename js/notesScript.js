var addNote = document.getElementById("add");
var removeAll = document.getElementById("remove");
var userInput = document.getElementById("userInput");
var list = document.getElementById("list");


//remove all notes
removeAll.onclick = function(){
    list.innerHTML='';
}

add.onclick=function(){
    addlist(list);
    userInput.value = '';
    userInput.focus();
}

function addlist(targetUl){
    var inputText = document.getElementById('userInput').value;
    var li = document.createElement('li');
    var textNode = document.createTextNode(inputText + ' ');
    var removeButton = document.createElement('button');
    
    if(inputText!==''){
        removeButton.className = 'btn-danger btn left';
        removeButton.innerHTML='&times;';
        removeButton.setAttribute('onclick', 'removeMe(this)');
        
        li.appendChild(textNode);
        li.appendChild(removeButton);
        targetUl.appendChild(li);
    }
    else{
        alert("please enter a note")
    }
}

function removeMe(item){
    var p = item.parentElement;
    p.parentElement.removeChild(p);
}


