
// Задача. При нажатии на кнопку менять цвет фона body на соответствующий
// менять цвет текста внутри нажатой кнопки на черный


// const redBtn = document.querySelector(".red-btn")
// redBtn.addEventListener("click", function() {
//    document.body.style.backgroundColor = "red"
//    redBtn.style.color = "black"
// })
    
// const greenBtn = document.querySelector(".green-btn")
// greenBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "green"
//  })

//  const blueBtn = document.querySelector(".blue-btn")
//  blueBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "blue"
//  })

//  const yellowBtn = document.querySelector(".yellow-btn")
//  yellowBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "yellow"
//  })

//  const imgBtn = document.querySelector(".img-btn")
// imgBtn.addEventListener("click", function() {
//     document.body.style.backgroundImage = "url('./images/R.jfif')"
//   });




//   Обращаться к кнопкам не по отдельно а ко всем одновременно
//   querySelectorAll()


// const allBtn = document.querySelectorAll("button")
//  allBtn.addEventListener("click", function() {
//     document.body.style.backgroundColor = "yellow"
//  })


// const button = document.querySelectorAll('button');
// const colors = ['red', 'green', 'blue', 'yellow', 'black'];
// let index = 0;

// button.addEventListener('click', function(event) {
//   event.preventDefault();
//   button.style.backgroundColor = colors[index];
//   index = (index + 1) % colors.length;
// });






const redBtn = document.querySelector(".red-btn")
redBtn.addEventListener("click", function() {
    document.body.style.backgroundImage = "none"
   document.body.style.backgroundColor = "red"
   redBtn.style.color = "black"
})
    
const greenBtn = document.querySelector(".green-btn")
greenBtn.addEventListener("click", function() {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "green"
 })

 const blueBtn = document.querySelector(".blue-btn")
 blueBtn.addEventListener("click", function() {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "blue"
 })

 const yellowBtn = document.querySelector(".yellow-btn")
 yellowBtn.addEventListener("click", function() {
    document.body.style.backgroundImage = "none"
    document.body.style.backgroundColor = "yellow"
 })

 const imgBtn = document.querySelector(".img-btn")
imgBtn.addEventListener("click", function() {
document.body.style.backgroundImage = "url('./images/R.jfif')"
  });