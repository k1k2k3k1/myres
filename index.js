document.querySelector(".crass").style.display = "none";
document.querySelector(".hambug").addEventListener("click",()=>{
    document.querySelector(".side").classList.toggle("sideGo");
    if(document.querySelector(".side").classList.contains("sideGo")){
        document.querySelector(".ham").style.display = 'inline';
        document.querySelector(".crass").style.display = 'none';
    }
    else{
        document.querySelector(".ham").style.display = 'none';
        setTimeout( () => {
        document.querySelector(".crass").style.display = 'inline';
        },1000);
    }
})