function useDateFormat(initialDate: string) {
  const formatDate = (date: string) => {
    return new Date(date)
      .toLocaleDateString("en-GB", {
        year: "2-digit",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/\//g, ".");
  };

  const [formattedDate, setFormattedDate] = React.useState(
    formatDate(initialDate)
  );

  React.useEffect(() => {
    setFormattedDate(formatDate(initialDate));
  }, [initialDate]);

  return formattedDate;
}
