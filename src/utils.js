export function countHoursStatement(
  minutes,
  statementTotal,
  statementRest,
  everythingDone,
  necoSeUdelalo
) {
  if (!necoSeUdelalo) {
    return statementTotal + (minutes % 60) + " min";
  } else {
    if (Math.floor(minutes / 60) > 0) {
      return statementRest + (minutes % 60) + " min";
    } else {
      return everythingDone;
    }
  }
}

export function countHours(minutes) {
  let hours = Math.floor(minutes / 60) + " h " + (minutes % 60) + " min";
  return hours;
}

export const timeCount = (todos) => {
  let minutes = todos?.reduce((total, current) => total + current.time, 0);

  return minutes;
};
