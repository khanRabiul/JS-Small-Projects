const btnE1 = document.querySelector('.btn');

btnE1.addEventListener('mouseover', (event) => {
// taking the value of mouse from x axis
   const x =(event.pageX - btnE1.offsetLeft); 
// taking the value of mouse from y axis
   const y =(event.pageY - btnE1.offsetTop);

// set style or providing value as x and y value 
   btnE1.style.setProperty("--xPos", x + "px");
   btnE1.style.setProperty("--yPos", y + "px");
})