export const convertDateFormat = (dateStr: string): string => {
  const [year, month, day] = dateStr.split('-');
  return `${year}. ${month}. ${day} 까지`;
};
