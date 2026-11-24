console.log("Hello World");
console.log("First day using GIT");
// Week 5 - Tuesday - JavaScript fundamentals
const projectName = "Level 1 Week 5 Project";
const daysDone = 2;

// getDaysLeft takes total days and days done, and returns how many days are left
function getDaysLeft(totalDays, daysDone) {
  return totalDays - daysDone;
}

if (daysDone < 3) {
  console.log(projectName + " is in progress.");
} else {
  console.log(projectName + " is done.");
}

console.log(getDaysLeft(3, daysDone));
