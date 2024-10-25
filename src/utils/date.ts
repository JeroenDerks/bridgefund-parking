export function formatDate(date: string) {
  if (!date) return "";

  const _date = new Date(date);
  const isValidDate = _date instanceof Date && !isNaN(_date.valueOf());

  if (isValidDate) return new Intl.DateTimeFormat("nl-NL").format(_date);

  return "";
}

export function apiDate(input: number) {
  const dateTime = new Date(input).toISOString();
  const date = dateTime.split("T")[0];
  return date;
}