var stat = document.querySelector("h5")

var btn=document.querySelector("#add")

flag=0

btn.addEventListener("click",function(){
    if(flag==0){
    stat.innerHTML="Strangers";
    stat.style.color="red";
    btn.innerHTML="Add Friend";
    flag=1
    }
    else{
        stat.innerHTML="Friends";
        stat.style.color="blue";
        btn.innerHTML="Remove Friend";
        flag=0
    }
})