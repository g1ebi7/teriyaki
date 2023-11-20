export function useDateFormatter(inputDate: string | null) {
  if (!inputDate) return;

  const date = new Date(inputDate);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().slice(2);

  const formattedDate = `${day}.${month}.${year}`;

  return formattedDate;
}
