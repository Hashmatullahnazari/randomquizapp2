
    function generateNumbers() {
      // Generate two random numbers between 1 and 10
      let num1 = Math.floor(Math.random() * 20) + 1;
      let num2 = Math.floor(Math.random() * 20) + 1;

      // Update the HTML to display the numbers
      document.getElementById("num1").innerHTML = num1;
      document.getElementById("num2").innerHTML = num2;
    }

    function checkAnswer() {
      // Get the values of the generated numbers and the answer
      let num1 = parseInt(document.getElementById("num1").innerHTML);
      let num2 = parseInt(document.getElementById("num2").innerHTML);
      let answer = parseInt(document.getElementById("answer").value);

      // Check if the answer is correct
      if (num1 + num2 === answer) {
        document.getElementById("result").innerHTML = "Correct!";
      } else {
        document.getElementById("result").innerHTML = "Incorrect. Try again.";
      }
    }

function resetQuiz() {
  // Generate new numbers
  generateNumbers();

  // Clear the answer field
  document.getElementById("answer").value = "";

  // Clear the result message
  document.getElementById("result").innerHTML = "";
}

setTimeout(resetQuiz, 5000);
