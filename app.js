// creating references
const correctAnswers = ["A", "A", "A", "A"];
const form = document.querySelector(".quiz-form"); // targeting the form with the class quiz-form
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // to prevent the default action that occur while submitting & i.e, refreshing the page

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  // matching the answers

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  // display result on the page
  scrollTo(0, 0); // to scroll the page towards the specified x & y co-ordinate. Here 0,0 is given so that it will automatically scroll to the top of the page

  result.classList.remove("d-none"); // the d-none is a class in bootstap which will prevent the specified thing from getting displayed. So here we are removed that class, so that the score will only become visible after we have submitted the answers

  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10); // repeats every 10 millisecond
});
