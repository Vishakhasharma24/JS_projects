const buttons = document.querySelectorAll('.button')
//console.log(buttons) 
// NodeList(3) [button, button, button]
const body = document.querySelector('body')
buttons.forEach (function(button)  {
  // console.log(buttons)
 button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
   if(e.target.id ==="grey"){
    body.style.backgroundColor = "grey"; ;
   }

   if(e.target.id ==="white"){
    body.style.backgroundColor = e.target.id;; 
   }
   if(e.target.id ==="blue"){
    body.style.backgroundColor = e.target.id; 
   }
   if(e.target.id ==="yellow"){
    body.style.backgroundColor = e.target.id; 
   }
 
  });
  
});
 //  function changeColor(e){
  //  if(e.target === e.target.id){
  //   body.style.backgroundColor = e.target.id ;

  //  }}
  //  changeColor(e)
