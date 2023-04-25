var bubbles = document.querySelectorAll('.bubble');
var wow = document.getElementById("wow");
var clk = document.getElementById("clk");
var bub = document.getElementById("bubbles");

let count = 0;

for (let i = 0; i < bubbles.length; i++) {
  const bubble = bubbles[i];

  bubble.addEventListener('click', () => {
    bubble.style.background= "transparent";
    bubble.style.color = "red";
   bubble.style.borderRadius= "30% 90% 30% 90%" ;

    if (bubble.textContent !== "Popped!") {
      count++;
    }

    bubble.textContent = "Popped!";

    if (count == bubbles.length) {
      wow.style.display = "block";
      bub.style.display= "none";
      clk.style.display ="none";
    }
  });
}
