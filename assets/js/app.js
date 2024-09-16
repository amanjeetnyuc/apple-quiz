document.addEventListener("DOMContentLoaded", function () {
    let currentQuestion = 0;
    let timerInterval;
    let timeLeft = 30;
    let score = 0; // Initialize the score to 0 at the start
  
    const quizData = [
        {
            question:
              "Q1. Which finish is new to iPhone 16 Pro and iPhone 16 Pro Max?",
            options: [
              "Black Titanium",
              "White Titanium",
              "Desert Titanium",
              "Natural Titanium",
            ],
            correct: 2, // Desert Titanium is the correct answer
          },
          {
            question:
              "Q2. iPhone 16 Pro and iPhone 16 Pro Max feature a ________________ design with a refined micro blasted texture, so they’re incredibly strong and impressively light.",
            options: [
              "Grade 3 Titanium",
              "Grade 4 Titanium",
              "Grade 5 Titanium",
              "Grade 6 Titanium",
            ],
            correct: 2, // Grade 5 Titanium is the correct answer
          },
          {
            question:
              "Q3. Karan loves capturing memories of his children. Which feature in the iPhone 16 lineup offers new ways to capture content easily and quickly so he never misses a moment.",
            options: [
              "Action Button",
              "QuickTake",
              "Camera Control",
              "None of the above",
            ],
            correct: 2, // Camera Control is the correct answer
          },
          {
            question:
              "Q4. Which camera feature is unique to iPhone 16 compared to the previous models?",
            options: [
              "Super-high-resolution photos (24MP and 48MP)",
              "Next-generation portraits with Focus and Depth Control",
              "Spatial photos",
              "All of the above",
            ],
            correct: 2, // Spatial photos is the correct answer
          },
          {
            question:
              "Q5. Akshay owns an iPhone 13 and is interested in iPhone 16. He wants to know how much faster iPhone 16 is compared to his current device.",
            options: [
              "Up to 50% faster CPU and Up to 70% faster GPU",
              "Up to 60% faster CPU and Up to 70% faster GPU",
              "Up to 50% faster CPU and Up to 60% faster GPU",
              "Up to 40% faster CPU and Up to 60% faster GPU",
            ],
            correct: 0, // Up to 50% faster CPU and Up to 70% faster GPU
          },
          {
            question:
              "Q6. Anna is a travel vlogger and is interested in iPhone 16 Pro. Which new video recording feature will help her record videos even in windy places.",
            options: [
              "Time-lapse video with stabilisation",
              "Macro video recording, including slomo and timelapse",
              "Wind noise reduction",
              "Action mode",
            ],
            correct: 2, // Wind noise reduction
          },
          {
            question:
              "Q7. What are the three different voice options which let you adjust the way voices sound in the videos?",
            options: [
              "Action, Spatial and In-frame",
              "In-frame, Studio and Cinematic",
              "Spatial, Studio and Action",
              "Cinematic, Studio and Mono",
            ],
            correct: 1, // In-frame, Studio and Cinematic
          },
          {
            question: "Q8. Which of these are features of Apple Intelligence?",
            options: ["Image Playground", "Genmoji", "Clean Up", "All of the above"],
            correct: 3, // All of the above
          },
          {
            question:
              "Q9. Which headphone features the industry’s smallest wireless charging case — as well as a built-in speaker for Find My to help you keep track of it.",
            options: [
              "AirPods 4 ANC",
              "AirPods Pro 2nd gen",
              "Beats Fit Pro",
              "Beats Solo Buds",
            ],
            correct: 0, // AirPods 4 ANC
          },
          {
            question:
              "Q10. AirPods Pro 2nd Gen provides up to ____ more Active Noise Cancellation than AirPods Pro 1st Gen and AirPods 4 ANC.",
            options: ["1x", "2x", "3x", "4x"],
            correct: 1, // 2x
          },
          {
            question:
              "Q11. What is the name of the feature in AirPods which automatically lowers the volume of what’s playing and brings it right back up when you’re done speaking with someone nearby.",
            options: [
              "Voice Isolation",
              "Personalised Volume",
              "Conversational Awareness",
              "Transparency mode",
            ],
            correct: 2, // Conversational Awareness
          },
          {
            question:
              "Q12. Using Siri Interactions, you can easily answer or reject calls using AirPods by simply nodding your head for yes or shaking it for a no.",
            options: ["True", "False"],
            correct: 0, // True
          },
          {
            question:
              "Q13. What is so unique about the display on Apple Watch Series 10? Choose the best response.",
            options: [
              "Apple's first wide-angle OLED display",
              "Up to 40% brighter when viewed at an angle",
              "LTPO3 OLED Always-on Retina display",
              "All of the above",
            ],
            correct: 3, // All of the above
          },
          {
            question:
              "Q14. Apple Watch Series 10 can fast charge from 0-80% in about ______ minutes.",
            options: ["20", "30", "45", "60"],
            correct: 1, // 30 minutes
          },
          {
            question:
              "Q15. Apple Watch Ultra 2 can fast charge from 0-80% in about ______ minutes.",
            options: ["20", "30", "45", "60"],
            correct: 3, // 60 minutes
          },
          {
            question:
              "Q16. Series 10 has up to ____ more screen area than Series 3 and up to ____ more screen area than Series 4,5,6 and SE.",
            options: ["75% and 30%", "65% and 40%", "30% and 75%", "60% and 40%"],
            correct: 0, // 75% and 30%
          },
          {
            question:
              "Q17. What are the two new watch faces that feature a ticking seconds hand enabled by the more power-efficient display.",
            options: [
              "Modular Ultra and Chronograph",
              "Flux and Pride",
              "Flux and Reflections",
              "Reflections and Count Up",
            ],
            correct: 2, // Flux and Reflections
          },
          {
            question:
              "Q18. The polished titanium cases in Apple Watch Series 10 are almost _____ lighter than stainless steel due to titanium’s incredible strength-to-weight ratio.",
            options: ["10%", "20%", "30%", "40%"],
            correct: 1, // 20%
          },
          {
            question:
              "Q19. Sharon likes to go snorkeling. Which feature of Apple Watch Series 10 will help her in this activity.",
            options: ["WR100", "Depth app", "Temperature sensor", "All of the above"],
            correct: 1, // Depth app
          },
          {
            question:
              "Q20. Apple Watch Series 10 is available in ____ and _____ case sizes.",
            options: [
              "42mm and 45mm",
              "43mm and 46mm",
              "42mm and 46mm",
              "41mm and 46mm",
            ],
            correct: 2, // 42mm and 46mm
          },
    ];
  
    let userAnswers = [];
  
    document.getElementById("startQuizBtn").addEventListener("click", () => {
      const username = document.getElementById("username").value;
      if (username.trim()) {
        startQuiz();
      } else {
        alert("Please enter your name.");
      }
    });
  
    function startQuiz() {
      document.getElementById("auth").style.display = "none";
      document.getElementById("quiz").style.display = "block";
      document.getElementById("score-container").style.display = "block"; // Show the score container
      loadQuestion();
      startTimer();
      updateScore(); // Initialize score to 0 on screen
    }
  
    function loadQuestion() {
      const quizContent = document.getElementById("quiz-content");
      quizContent.innerHTML = "";
  
      const questionObj = quizData[currentQuestion];
  
      // Update question number
      updateQuestionNumber();
  
      // Question text
      const questionText = document.createElement("div");
      questionText.className = "question";
      questionText.textContent = questionObj.question;
      quizContent.appendChild(questionText);
  
      // Options
      const optionsList = document.createElement("ul");
      optionsList.className = "options";
  
      questionObj.options.forEach((option, optIndex) => {
        const optionItem = document.createElement("li");
        const inputId = `q${currentQuestion}_opt${optIndex}`;
        optionItem.innerHTML = `
                      <input type="radio" id="${inputId}" name="q${currentQuestion}" value="${optIndex}">
                      <label for="${inputId}">${option}</label>
                  `;
        // Add event listener for selection
        optionItem
          .querySelector('input[type="radio"]')
          .addEventListener("change", () => selectAnswer(optIndex));
        optionsList.appendChild(optionItem);
      });
  
      quizContent.appendChild(optionsList);
    }
  
    // Function to update question number dynamically
    function updateQuestionNumber() {
      const questionNumberContainer = document.getElementById("question-number");
      questionNumberContainer.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
    }
  
    function selectAnswer(selectedOption) {
      userAnswers[currentQuestion] = selectedOption;
  
      // Update the score immediately if the answer is correct
      if (selectedOption === quizData[currentQuestion].correct) {
        score += 10; // Add 10 points for the correct answer
      }
  
      // Update the score display in real time
      updateScore();
  
      moveToNextQuestion();
    }
  
    // Function to update the score display
    function updateScore() {
      document.getElementById("score").textContent = `Score: ${score}`;
    }
  
    function moveToNextQuestion() {
      clearInterval(timerInterval);
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        loadQuestion();
        resetTimer();
        startTimer();
      } else {
        endQuiz();
      }
    }
  
    function startTimer() {
      timeLeft = 30;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
      timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
          moveToNextQuestion();
        }
      }, 1000);
    }
  
    function resetTimer() {
      clearInterval(timerInterval);
      timeLeft = 30;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    }
  
    function endQuiz() {
      document.getElementById("quiz-content").innerHTML = `<h2>Quiz Completed!</h2>`;
      calculateFinalScore();
    }
  
    function calculateFinalScore() {
      let finalScore = score; // Use the score that has been updated in real-time
      alert(`Your final score is: ${finalScore}`);
      sendDataToGoogleSheet(finalScore);
    }
  
    function sendDataToGoogleSheet(finalScore) {
      const username = document.getElementById("username").value;
      const answers = userAnswers;
  
      const data = {
        name: username,
        answers: answers,
        score: finalScore,
      };
  
      const url = "https://script.google.com/macros/s/AKfycbzhDI-NBAW5kY4uTGQhMXvpxXOndKasFPYNNGPS5VUmnY7bIZ6jcywcj1k512EAHdQ3Zw/exec"; // Replace with your actual Google Apps Script web app URL
  
      fetch(url, {
        method: "POST",
        mode: "no-cors", // Ensure CORS is handled
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok.");
          }
          return response.json();
        })
        .then((responseData) => {
          const messageContainer = document.querySelector(".message-container");
          const resultMessage = document.getElementById("resultMessage");
  
          if (responseData.status === "success") {
            resultMessage.textContent = "Quiz submitted successfully!";
            messageContainer.style.display = "block";
          } else {
            resultMessage.textContent = `Error: ${responseData.message}`;
            messageContainer.style.display = "block";
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          const messageContainer = document.querySelector(".message-container");
          const resultMessage = document.getElementById("resultMessage");
          resultMessage.textContent = "Quiz submitted successfully!";
          messageContainer.style.display = "block";
        });
    }
  });
  
  document.getElementById('startQuizBtn').addEventListener('click', function () {
      var username = document.getElementById('username').value;
      
      // Check if a name is entered
      if (username.trim() !== '') {
          // Show the quiz, timer, question number, and score
          document.getElementById('quiz').style.display = 'block';
          document.getElementById('timer').style.display = 'block';
          document.getElementById('question-number-container').style.display = 'block';
          document.getElementById('score-container').style.display = 'block';
  
          // Optionally hide the auth (name input section)
          document.getElementById('auth').style.display = 'none';
      } else {
          alert('Please enter your name to start the quiz.');
      }
  });

  let quizStartTime; // Add this to store the quiz start time
let quizEndTime; // Add this to store the quiz end time

function startQuiz() {
  quizStartTime = new Date(); // Capture the quiz start time
  document.getElementById("auth").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  loadQuestion();
  startTimer();
}

function endQuiz() {
    quizEndTime = new Date(); // Capture the quiz end time
    document.getElementById("quiz-content").innerHTML = `<h2>Quiz Completed!</h2>`;
    calculateScore();
  }
  
  function calculateScore() {
    let score = 0;
    quizData.forEach((questionObj, index) => {
      if (userAnswers[index] === questionObj.correct) {
        score++;
      }
    });
  
    const finalScore = score * 10;
  
    // Calculate the time taken
    const timeTaken = Math.round((quizEndTime - quizStartTime) / 1000); // Time in seconds
  
    alert(`Your score is: ${finalScore}. Time taken: ${timeTaken} seconds.`);
    sendDataToGoogleSheet(finalScore, timeTaken);
  }

  
  
  