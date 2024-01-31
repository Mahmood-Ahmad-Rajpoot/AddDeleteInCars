import { create } from "zustand";
import { usePersonStore } from "../ZuStand/personStore";
 
const Calender = () => {
  const firstName = usePersonStore((state: any) => state.firstName);
  const setFirstName = usePersonStore((state: any) => state.setFirstName);
  const lastName = usePersonStore((state: any) => state.lastName);
  const setLastName= usePersonStore((state: any) => state.setLastName);

  const inputStyles = `rounded-md bg-white h-[50px] shadow-[0_5px_20px_rgb(0,0,0,0.12)] focus:outline-none px-5 w-full`;

  return (
    <div className="w-full h-[100vh] bg-[lightgrey]">
      <h1>{firstName}</h1>
      <input
      placeholder="  Firstname"
        className={inputStyles}
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
      />
       <h1>{lastName}</h1>
      <input
      placeholder="  Firstname"
        className={inputStyles}
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
      />
    </div>
  );
};

export default Calender;
