let str = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      str = eval(str);
      document.getElementById('display').value = str;
    } else {
      console.log(e.target)
      str = str + e.target.innerHTML;
      document.getElementById('display').value = str;
    }
  });
});
