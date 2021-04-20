export function countHoursStatement(
  minutes,
  statementTotal,
  statementRest,
  everythingDone,
  necoSeUdelalo
) {
  if (!necoSeUdelalo) {
    return statementTotal + countHours(minutes);
  } else {
    if (minutes > 0) {
      return statementRest + countHours(minutes);
    } else {
      return everythingDone;
    }
  }
}

export function countHours(minutes) {
  return Math.floor(minutes / 60) + " h " + (minutes % 60) + " min";
}

export const timeCount = (todos) => {
  return todos?.reduce((total, current) => total + current.time, 0);
};
