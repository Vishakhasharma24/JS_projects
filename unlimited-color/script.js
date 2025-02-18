const change = function(){
  const val = '0123456789ABCDEF'
  let color = "#"
  for(let i = 0;i<6;i++){
    color+= val[Math.floor(Math.random()*16)]
  }
  return color;

};
let interval;
const startChangingColor = function(){
   interval = setInterval( changecol , 1000)
 function changecol(){
  document.body.style.backgroundColor = change()
 } 
}
const stopchange = function(){
  clearInterval(interval);

}
document.querySelector('#start').addEventListener('click' , startChangingColor)
document.querySelector('#stop').addEventListener('click' , stopchange)