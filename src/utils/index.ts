export const convertToDateFormat = (date: Date) => {
  const leftPad = (n: number) => {
    if (n >= 10) return n;
    return `0${n}`;
  };
  const year = date.getFullYear();
  const month = leftPad(date.getMonth() + 1);
  const day = leftPad(date.getDate());

  return [year, month, day].join('-');
};
