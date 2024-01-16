

export const dispatchCompanyFilter = (companyName: string, data: any[]) => {
  console.log(data)
  const filteredData = data.filter((d: any) => d.company_name === companyName);

  return filteredData;
};
