import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { dispatchCompanyFilter, resetDispatch } from "../../features/dispatchSlice";

const CompanyFilter = () => {
  const dispatch = useDispatch();
  const { reset } = useSelector((store: any) => store.dispatchSlice);
  const [selectedValue, setSelectedValue] = useState<string >('');

  const handleChange = (value: { value: string; label: React.ReactNode }) => {
    setSelectedValue(value.value);
    dispatch(dispatchCompanyFilter(value.value));
  };

 
  useEffect(() => {
     if (reset) {
       setSelectedValue('');
    }
  }, [reset, dispatch]);

  return (
    <Select
      labelInValue
      value={{ value: selectedValue, label: selectedValue || "All Companies" }}
      style={{ width: 250 }}
      onChange={handleChange}
      options={[
        {
          value: "Techesthete",
          label: "Techesthete",
        },
        {
          value: "Honda",
          label: "Honda",
        },
      ]}
    />
  );
};

export default CompanyFilter;
