window.onload = function(){
    changePage();    
}

function changePage(){
    var filename = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
    if(document.cookie.username !== "teste"){
        if (filename !== "index.html")
            window.location.href = "index.html"
    }else{
        if (filename !== "pagina1.html")
            window.location.href = "pagina1.html";
    }
}

function setCookie(){
    //debugger;
    document.cookie.username = "teste" 
    changePage();
    alert(document.cookie);
}