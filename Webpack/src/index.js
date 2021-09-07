import './SCSS/index.scss';

const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });



    function setInputFilter(textbox, inputFilter) {
        [
          "input",
        ].forEach(function (event) {
          textbox.addEventListener(event, function () {
            if (inputFilter(this.value)) {
              this.oldValue = this.value;
              this.oldSelectionStart = this.selectionStart;
              this.oldSelectionEnd = this.selectionEnd;
            } else if (this.hasOwnProperty("oldValue")) {
              this.value = this.oldValue;
              this.setSelectionRange(
                this.oldSelectionStart,
                this.oldSelectionEnd
              );
            } else {
              this.value = "";
            }
          });
        });
      }
  
      setInputFilter(document.getElementById("fname"), function (value) {
        return /^[a-z]*$/i.test(value);
      });
      setInputFilter(
        document.getElementById("lname"),
        function (value) {
          return /^[a-z]*$/i.test(value);
        }
      );
      setInputFilter(document.getElementById("address"), function (value) {
        return /^[a-z]*$/i.test(value);
      });
  
      setInputFilter(document.getElementById("phone"), function (value) {
        return /^\d*$/.test(value);
      });
      setInputFilter(
        document.getElementById("age"),
        function (value) {
          return /^\d*$/.test(value);
        }
      );