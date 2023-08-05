document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    startTest(username);
  });

function startTest(username) {
  document.getElementById("login").style.display = "none";
  document.getElementById("test").style.display = "block";
  // Sample test content
  const testContent = `
    <h2>Welcome, ${username}!</h2>
    <form id="testForm">
      <div class="section">
        <h3>Engineering</h3>
        <label for="q1">Question 1: OS computer abbreviation usually means ?</label>
        <input type="text" id="q1" required>
        <br>
        <label for="q2">Question 2: What part of a database that holds only one type of information ?</label>
        <input type="text" id="q2" required>
        <br>
        <label for="q3">Question 3: What does SSL Stand for ?</label>
        <input type="text" id="q3" required>
        <br>
      </div>
      <div class="section">
        <h3>Medical</h3>
        <label for="q4">Question 4: Hyperchondria is also termed as ?</label>
        <input type="text" id="q4" required>
        <br>
        <label for="q5">Question 5: Carcinoma arises from the ?</label>
        <input type="text" id="q5" required>
        <br>
        <label for="q6">Question 6: Elephantiasis is caused by ?</label>
        <input type="text" id="q6" required>
        <br>
      </div>
      <div class="section">
        <h3>Groups</h3>
        <label for="q7">Question 7: Which country carries out New Space launch Amid Nuclear Talks  ?</label>
        <input type="text" id="q7" required>
        <br>
        <label for="q8">Question 8: The power to decide an election petition is vested in the ?</label>
        <input type="text" id="q8" required>
        <br>
        <label for="q9">Question 9: Who was known as Iron man of India ?</label>
        <input type="text" id="q9" required>
        <br>
      </div>
      <!-- Add more sections with questions here -->
      <button type="submit">Submit Test</button>
    </form>
  `;
  document.getElementById("test").innerHTML = testContent;
  // Add event listener to the submit button to calculate and display the results
  document
    .getElementById("testForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const results = calculateResults();
      displayResults(results, username);
    });
}

function calculateResults() {
  // Sample answers
  const answers = [
    ["operating system", "field", "secure socket layer"],
    ["anxiety disorder", "epithelial tissues", "lymphatic filariasis"],
    ["iran","high court","sardar vallabai patel"]
  ];
  var k = 1;
  // Calculate results
  let sectionScores = [0, 0, 0];
  let totalScore = 0;
  for (let section = 0; section < answers.length; section++) {
    for (let i = 0; i < answers[section].length; i++) {
      const questionId = "q" + (k++);
      var userAnswer = document.getElementById(questionId).value;
      userAnswer = userAnswer.toLowerCase().trim();
      if (userAnswer == answers[section][i]) {
        sectionScores[section]++;
        totalScore++;
      }
    }
  }
  return { sectionScores, totalScore };
}

function displayResults(results, username) {
  console.log(results);
  document.getElementById("test").style.display = "none";
  document.getElementById("results").style.display = "block";
  // Display the results in the results div
  const resultsContent = `
    <h2>Results for ${username}</h2>
    <p>Section 1 score: ${results.sectionScores[0]} out of 3</p>
    <p>Section 2 score: ${results.sectionScores[1]} out of 3</p>
    <p>Section 3 score: ${results.sectionScores[2]} out of 3</p>
    <p>Total score: ${results.totalScore} out of 9</p>
    <button id = "homebtn"> <a href="../interest.html" class = "homebtntag">Return To Home</a> </button>
  `;
  document.getElementById("results").innerHTML = resultsContent;
}

