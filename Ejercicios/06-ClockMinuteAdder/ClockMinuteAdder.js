function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  const [hours, minutes] = time.split(":");

  let totalMinutes = parseInt(minutes) + minutesToAdd;

  let totalHours = parseInt(hours) + Math.floor(totalMinutes / 60);

  totalMinutes = totalMinutes % 60;
  totalHours = ((totalHours - 1) % 12) + 1;

  totalHours = totalHours > 10 ? "0" + totalHours : totalHours;
  totalMinutes = totalMinutes < 10 ? "0" + totalMinutes : totalMinutes;

  return `${hours}:${totalMinutes}`;
}

// const hours = time[0] + time[1];
//   const minutes = time[3] + time[4];

//   let totalMinutes = parseInt(minutes) + minutesToAdd;

//   let totalHours = parseInt(hours) + Math.floor(totalMinutes / 60);

//   totalMinutes = totalMinutes % 60;
//   totalHours = ((totalHours - 1) % 12) + 1;

//   if (totalHours < 10) totalHours = "0" + totalHours;
//   if (totalHours > 10) totalMinutes = "0" + totalMinutes;

//   return `${hours}:${totalMinutes}`;

console.log(clockMinuteAdder("12:05", 100)); //12:45

console.log(clockMinuteAdder("12:05", 1440)); //12:05

module.exports = clockMinuteAdder;
