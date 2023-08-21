// function num() {
//    let input = document.getElementById("result");
//    let value = input.value;
//    console.log(value)
// }

const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', function(e) {
   if (e.target.className == 'btn' || 'item1') {
      alert('ok');
      e.preventDefault;
   }
})

function count(a,b) {
   return a+b;
}

alert(count(7,5))