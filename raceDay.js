let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegistry = true;
const age = 35;

if (age > 18 && earlyRegistry) {
  raceNumber += 1000;
}
if (age > 18 && earlyRegistry) {
  console.log(
    `Your race starts at 9:30am, and your race number is ${raceNumber}.`
  );
} else if (age > 18 && !earlyRegistry) {
  console.log(
    `Your race starts at 11:00am, and your race number is ${raceNumber}.`
  );
} else if (age < 18) {
  console.log(
    `Your race starts at 12:30pm, and your race number is ${raceNumber}.`
  );
} else { //added this else statement to address age = 18
  console.log("Sorry we forgot about you...");
}
