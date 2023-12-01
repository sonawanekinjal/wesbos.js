const panels = document.querySelectorAll('.panel')
console.log(panels);
function panelopen(panel){
   panel.classList.toggle('open')
}

function panelactive(e,panel){
  console.log(e)
  if(e.propertyName.includes('flex')){
    panel.classList.toggle('open-active') 
}
} 

panels.forEach(panel => panel.addEventListener('click',()=>panelopen(panel)))
panels.forEach(panel => panel.addEventListener('transitioned',(e)=>panelactive(e,panel)))
