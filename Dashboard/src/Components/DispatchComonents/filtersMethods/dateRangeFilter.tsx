interface objectType {
  year: number;
  month: number;
  day: number;
}
export const dispatchDateRangeFilter = (
  startDate: objectType,
  endDate: objectType,
  data: any[]
) => {
    console.log(data);
    
    if (!Array.isArray(data)) {
        console.error('Invalid data. Expected an array.');
        return [];
      }
  const filteredData:any[] = data.filter((d: any) => {
    const [year, month, day] = d.pu_date.split("-").map(Number);

    return (
      year >= startDate.year &&
      month >= startDate.month &&
      day >= startDate.day &&
      year <= endDate.year &&
      month <= endDate.month &&
      day <= endDate.day
    );
  });
  return filteredData;

  //   console.log(index,':', 'year:', year, 'month:',month,'day:', day)
};
