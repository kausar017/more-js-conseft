function chackAge() {
  const input = document.getElementById('input');
  const inputText = input.value;
  const errTag = document.getElementById('error');

  try {
    const inputEl = parseInt(inputText);
        if(isNaN(inputEl)) {
          throw "please Entar your numbar";
        }
        else if(inputEl < 18) {
          throw "Bacca kacca not Alloewd"
        }
        else if(inputEl > 30) {
          throw "old parson not alloewd"
        }

        errTag.innerHTML = "";
  }
  
  catch(err) {
    console.log(err);
    errTag.innerHTML = 'Error:' + err;
  }
  finally{
    console.log('All done try catch')
  }
  console.log(1111);
}
