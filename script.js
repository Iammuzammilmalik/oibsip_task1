function liveScreen(value) {
    document.getElementById('result').value += value;
  }
  
  function calculate(expression) {
    try {
      const result = eval(expression);
      document.getElementById('result').value = result;
    } catch (error) {
      document.getElementById('result').value = 'Error';
    }
  }
  
  function changeTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
  }
  