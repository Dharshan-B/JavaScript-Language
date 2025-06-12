<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Guess the Number</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #1e3c72, #2a5298);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }

    .container {
      background-color: rgba(255, 255, 255, 0.1);
      padding: 40px;
      border-radius: 20px;
      box-shadow: 0 0 20px rgba(0,0,0,0.4);
      text-align: center;
      width: 300px;
      position: relative;
    }

    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    input[type="number"] {
      padding: 10px;
      border: none;
      border-radius: 10px;
      width: 100%;
      font-size: 16px;
      margin-bottom: 15px;
    }

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      background-color: #00c6ff;
      color: white;
      font-size: 16px;
      cursor: pointer;
      transition: background 0.3s, transform 0.2s;
    }

    button:hover {
      background-color: #0072ff;
      transform: scale(1.05);
    }

    #result {
      margin-top: 20px;
      font-size: 18px;
      font-weight: bold;
    }

    /* Flower animation */
    .flower-glow {
      position: absolute;
      top: -40px;
      left: calc(50% - 25px);
      font-size: 40px;
      opacity: 0;
      animation: glow 2s ease-out forwards;
    }

    @keyframes glow {
      0% {
        transform: scale(1);
        opacity: 0;
        text-shadow: 0 0 0px #ff69b4;
      }
      50% {
        transform: scale(1.3);
        opacity: 1;
        text-shadow: 0 0 20px #ff69b4, 0 0 30px #ff69b4;
      }
      100% {
        transform: scale(1);
        opacity: 0;
        text-shadow: 0 0 0px #ff69b4;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Guess the Number (1 - 100)</h1>
    <input id="guess" type="number" placeholder="Enter your guess here">
    <button onclick="check()">Guess</button>
    <p id="result">🎯 Let's Play!</p>
    <div id="flower" class="flower-glow">🌸</div>
  </div>

  <script>
    var guessNumber = document.getElementById("guess");
    var result = document.getElementById("result");
    var flower = document.getElementById("flower");
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log("Random Number (for debugging):", randomNumber); // For debugging purposes
    function check() {
      var enteredNumber = Number(guessNumber.value);

      if (isNaN(enteredNumber) || enteredNumber < 1 || enteredNumber > 100) {
        result.textContent = "⚠️ Enter a valid number between 1 and 100!";
        result.style.color = "#ffcc00";
        return;
      }

      if (enteredNumber === randomNumber) {
        result.textContent = "🎉 You're Right! The number was " + randomNumber;
        result.style.color = "#00ff99";
        alert("You Won!");

        // Show flower animation
        flower.style.animation = 'none'; // reset animation
        void flower.offsetWidth; // force reflow
        flower.style.animation = 'glow 2s ease-out forwards';

        // Reset game
        randomNumber = Math.floor(Math.random() * 100) + 1;
        guessNumber.value = "";
      } else if (enteredNumber > randomNumber) {
        result.textContent = "📈 Too High! Try Again.";
        result.style.color = "#ff6666";
      } else {
        result.textContent = "📉 Too Low! Try Again.";
        result.style.color = "#ff6666";
      }
    }
  </script>
</body>
</html>
