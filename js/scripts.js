// Generate and show password.
$(document).ready(function () {
  $('.button2').click(function() {
    
      var characterSet = '';
      var x = 0;
      if (document.getElementById('cbox1').checked) {
          characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          x++;
      }
      if (document.getElementById('cbox2').checked) {
          characterSet += 'abcdefghijklmnopqrstuvwxyz';
          x++;
      }
      if (document.getElementById('cbox3').checked) {
          characterSet += '0123456789';
          x++;
      }
      if (document.getElementById('cbox4').checked) {
          characterSet += ' !"#$%&()*+,-./:;<=>?@[\]^_`{|}~';
          x++;
      }
      else if (x == 0) {
          window.alert("Please select at least one character set!");
          x = 0;
      }



    // Check required length of password. If accepted, generate the password.
      var passwordLength = Number(document.getElementById('passwordLength').value);
      if (passwordLength < 8 || passwordLength > 128) {
          window.alert("The length of the password must be between 8 and 128");
          var password = '';
      }
      else {
          var randomNums = new Uint8Array(passwordLength);
          window.crypto.getRandomValues(randomNums);
          var password = '';
          for (var i = 0; i < passwordLength; ++i) {
              password += characterSet.charAt(randomNums[i] % characterSet.length);
          }
      }


    // Show the password.
      document.getElementById('result').value = password;


      function copyToClipboard(text) {
          var dummy = document.createElement("textarea");
          document.body.appendChild(dummy);
          dummy.value = password;
          dummy.select();
          document.execCommand("copy");
          document.body.removeChild(dummy);
      }

      copyToClipboard(password)
  });
});
