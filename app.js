let div=document.querySelector(".div");
let ul=document.querySelector(".ul");
let lis=document.querySelectorAll(".li");  
div.addEventListener("click",function(){  
    console.log("click div");
});

ul.addEventListener("click",function(event){
   
    event.stopPropagation();
    console.log("click ul");
});

for(li of lis){
    li.addEventListener("click",function(event){
        event.stopPropagation();
        console.log("click li");
    }); 
}; 
let work=document.querySelector("#work");
let btn=document.querySelector("#btn");
let list=document.querySelector(".list_todo");
btn.addEventListener("click",function(event){
    
   let item=document.createElement("li");
   item.innerText=work.value;
   let delbtn=document.createElement("button");
   delbtn.innerText="delete";
   delbtn.classList.add("delbtn"); 
   item.appendChild(delbtn); 
   list.appendChild(item);
  
   work.value=""; 
});
list.addEventListener("click",function(event){ 
    if(event.target.nodeName=="BUTTON"){
      let parent=event.target.parentElement;
      
    parent.remove(); 
    }  
});
