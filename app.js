'use strict';
const colors=['red','orangered','orange','yellow','yellowgreen','purple','indigo','skyblue','springgreen','darkgoldenrod','teal','darkcyan','darkorange','cyan','gold','violet','magenta']
for (let i = 1; i <=500; i++) {
const div=document.createElement('div')
  document.querySelector('main').appendChild(div)
  div.addEventListener('mouseover',function(){
   div.style.backgroundColor=colors[Math.floor(Math.random()*colors.length)]
 div.addEventListener('mouseout',function(){
   div.style.backgroundColor='#444'
 })
 }) 
}
