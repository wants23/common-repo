/**
 * 输出年份
 * @param date
 * @returns number
 */
export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  console.log(year);
  return year;
};

/** 两数相加 */
export const fn = (a: number, b: number) => {
  return a + b;
};
