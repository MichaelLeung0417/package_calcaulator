export function getYear(): number[] {
  return [2024, 2025];
}

export function getMonth(years: number[]): { year: number; month: number[] }[] {
  let months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return years.map((year) => {
    if (year === 2025) {
      return { year, month: months.slice(0, 3) };
    }
    return { year, month: months };
  });
}
