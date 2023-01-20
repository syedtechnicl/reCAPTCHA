const checkbox = document.querySelector("#checkbox");
const submitBtn = document.querySelector("button[type=submit]");

checkbox.disabled = true;
submitBtn.disabled = true;

var elements = document.getElementsByClassName('element')
var SelectColor = document.querySelector("#selectoColor");


function Random() {
  const letter = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letter[Math.floor(Math.random() * 16)];
  }
  return color;
}

let colorarray = [];


elements.map((element)=> {
    const color = Random();
    colorArray.push(color)
    element.style.background = color;
    element.innerHTML = color;
});


SelectColor.innerHTML = colorarray[Math.floor(Math.random()* colorarray.length)]


elements.map((element) => {
 element.addEventListner('click',()=>{
  if (element.innerHTML === SelectColor.innerHTML) {
    alert('You are Human');
    checkbox.checked= true;
     submitBtn.disabled = false;
     submitBtn.classList.remove = ('btn-light')
     submitBtn.classList.add('btn-primary')
  }else{
    alert('please verify you are human');
  }

 }) 
});






