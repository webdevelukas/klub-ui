export function renderDate(date: string) {
  const parsedDate = parseDate(date);

  const newDate = new Intl.DateTimeFormat("de-DE", {
    weekday: "short",
    day: "2-digit",
    month: "2-digit",
  }).format(parsedDate);

  return newDate;
}

function parseDate(date: string) {
  const splittedDate = date.split(".");
  const day = Number(splittedDate[0]);
  const month = Number(splittedDate[1]) - 1;
  const year = Number(splittedDate[2]);

  return new Date(year, month, day);
}
