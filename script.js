let left = document.querySelector('.left');
let right= document.querySelector('.right');
let snow =document.querySelector('.snow');
// text declare here

let gift2=document.querySelector('.gift2');
let gift=document.querySelector('.gift');
let white=document.querySelector('.white');
let tree=document.querySelector('.tree');
let start=document.querySelector('.start');
start.style.display="none";
let kid=document.querySelector('.kid');

left.addEventListener('click', function(){
 

    left.style.display="block";
    right.style.display="block";
    kid.style.display="none";
    snow.style.display="none";
    tree.style.display="none";
    gift.style.display="none";
    gift2.style.display="none";

    })

    right.addEventListener('click', function(){

        left.style.display="block";
        right.style.display="block";
        kid.style.display="none";
       snow.style.display="block";
       tree.style.display="none";
       gift.style.display="none";
       gift2.style.display="none";
    
        })
  
       

        left.addEventListener('click', function(){

    left.style.display="block";
    right.style.display="block";
    kid.style.display="none";
   snow.style.display="none";
   tree.style.display="block";
   gift.style.display="none";
   gift2.style.display="none";

    })
    right.addEventListener('click', function(){

     left.style.display="block";
    right.style.display="block";
    kid.style.display="none";
   snow.style.display="none";
   tree.style.display="none";
   gift.style.display="block";
   gift2.style.display="none";

    })

    left.addEventListener('click', function(){

        left.style.display="block";
       right.style.display="block";
       kid.style.display="none";
      snow.style.display="none";
      tree.style.display="none";
      gift.style.display="none";
      gift2.style.display="block";
   
       }) 
       right.addEventListener('click', function(){

        left.style.display="none";
       right.style.display="none";
       kid.style.display="none";
      snow.style.display="none";
      tree.style.display="none";
      gift.style.display="block";
      gift2.style.display="none";
   
       })
        