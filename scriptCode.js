const button = document.querySelectorAll('#container input[type="button"]');
button.forEach(button => {
   button.addEventListener('click', () => {
     button.classList.add('animate');
     button.addEventListener('animationend', () => {
       button.classList.remove('animate');
     }, { once: true });
   });
 });
function appendToScreen(inputValue) {
    let onScreenValue = document.getElementById('output');
    onScreenValue.value += inputValue;
}
function clearScreen() {
   let onScreenValue = document.getElementById('output');
   onScreenValue.value = '';
}
function backSpace() {
   let onScreenValue = document.getElementById('output');
   onScreenValue.value = onScreenValue.value.slice(0,-1);
}
function outResult() {
   let onScreenValue = document.getElementById('output').value;
   try {
     let resultValue = eval(onScreenValue);
      document.getElementById('output').value = resultValue;
   } catch {
      document.getElementById('output').value = 'Math Error';
   }
}
