let raceNumber = Math.floor(Math.random() * 1000);

var earlyBird = true;

var runnerAge = 18;

if (runnerAge > 18 && earlyBird) {
  raceNumber += 1000;
}

if ( runnerAge > 18 && earlyBird) {
  console.log("You will race at 9:30 AM with race number " + raceNumber);
}
else if ( runnerAge > 18 && !earlyBird)
{
    console.log("You will race at 11:00 AM with race number " + raceNumber);
}
else if( runnerAge < 18)
{
    console.log("You will race at 12:30 PM with race number " + raceNumber);
}
else
{
    console.log("See the registration desk");
}