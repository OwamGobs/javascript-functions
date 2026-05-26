const button = document.querySelector("calculator");
const message = document.querySelector("#message");

function CalculateScore(testOne, testTwo) {
  const score = (testOne + testTwo);
  return total ;
}

function showResult(name, score) {
  message.textContent = `${name} your score is  ${score}`;
}

button.addEventListener("click", function() {
  const studentName = prompt("Enter your name:");
  const testOneScore = number(prompt("Enter your score for Test One:"));
  const testTwoScore = number(prompt("Enter your score for Test Two:"));

  const finalScore = CalculateScore(testOneScore, testTwoScore);
  showResult(studentName, finalScore);
});