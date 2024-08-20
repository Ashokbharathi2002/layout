function endload(){
    console.log('The page has fully loaded');
    document.getElementById("loading").style.display="none";
}

function startload(){  
    console.log('The page has loaded');
    document.getElementById("loading").style.display="block";
}

