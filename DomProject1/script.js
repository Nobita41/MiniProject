var add=document.querySelector("#add");

var h5=document.querySelector("h5")
var check=0
// add.addEventListener('click', function(){
//     h5.innerHTML="Friends";
//     h5.style.color="green";
// });
// reomve.addEventListener('click', function(){
//     h5.innerHTML="Stranger";
//     h5.style.color="red";
// })
add.addEventListener('click', function(){
    if(check==0){
        h5.innerHTML="Friends"
          h5.style.color="green"
          add.innerHTML="Remove friend"
          check=1
    }
    else{
        h5.innerHTML="Stranger";
        h5.style.color="red";
        add.innerHTML="Add Friend"
        check=0
    }
});