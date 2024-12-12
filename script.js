let left = document.querySelector('.left');
let right= document.querySelector('.right');
let snow =document.querySelector('.snow');
let gift2=document.querySelector('.gift2');


// text declare here
let h1=document.querySelector('.h1');
let h4=document.querySelector('.h4');
// let gift2=document.querySelector('.gift2');
    gift2.style.display="none";
let gift=document.querySelector('.gift');
    gift.style.display="none";
let white=document.querySelector('.white');
   white.style.display="none"; 
let tree=document.querySelector('.tree');
    tree.style.display="none";
let start=document.querySelector('.start');
start.style.display="none";
let kid=document.querySelector('.kid');
    kid.style.display="none";



// left.addEventListener('click', function(){
 

//     left.style.display="block";
//     right.style.display="block";
//     kid.style.display="block";
//     snow.style.display="none";
//     tree.style.display="none";
//     gift.style.display="none";
//     gift2.style.display="none";

//     })
           
               left.addEventListener('click', function(){
           
                   left.style.display="none";
                  right.style.display="none";
                  kid.style.display="none";
                 snow.style.display="none";
                 tree.style.display="none";
                 gift.style.display="none";
                 gift2.style.display="block";
              h4.style.display="none";
              h1.innerHTML="double click to open your gift";

              
                  }) 
                 
                  right.addEventListener('click', function(){
           
                   left.style.display="none";
                  right.style.display="none";
                  kid.style.display="none";
                 snow.style.display="none";
                 tree.style.display="none";
                 gift.style.display="block";
                 gift2.style.display="none";
                 h4.style.display="none";
                 h1.innerHTML="double click to reveal your gift";

                  })
                  gift.addEventListener('dblclick', function(){
gift.style.display="none";
kid.style.display="block";
h1.innerHTML="congrats you get to see Santa";

                  })
                  gift2.addEventListener('dblclick' , function(){
gift2.style.display="none";
tree.style.display="block";
h1.innerHTML="HAHA you have to spend christmas alone with you and your ornament";
                  })


                   