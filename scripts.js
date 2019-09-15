window.onload = function(){
    var filename = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
    changePage();    
}

function changePage(){
    var filename = window.location.href.substring(window.location.href.lastIndexOf('/')+1);
    if(document.cookie !== "username=teste"){
        if (filename !== "index.html")
            window.location.href = "index.html"
    }else{
        if (filename !== "pagina1.html")
            window.location.href = "pagina1.html";
    }
}

function setCookie(){
    //debugger;
    var user = document.getElementsByName("user")[0].value;
    var senha = document.getElementsByName("senha")[0].value;

    if ((user == "admin") && (senha == "admin")){
        document.cookie = "username=teste"
    }
     
    changePage();
}