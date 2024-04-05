import { useState } from "react";
import Wrapper from "../wrapperComponent/Wrapper";
import { Button } from "antd";

const DateAndTime = () => {
  // const borderRight = "border-black border-r-2";
  // const borderBottom = "border-black border-b-2";
  // const borderBR = "border border-r-2 border-b-2";

  const [value, setValue] = useState("X");
  const [index, setIndex] = useState<string[]>([]);
  const [winner, setWinner] = useState<string | null>("");

  const [count, setCount] = useState({ count: 0, win: "" });

  const btnStyles = `${
    winner !== "" && "disabled"
  } min-w-[80px] min-h-[80px] text-black  rounded-none`;
  const checkWinner = (i: number) => {
   
  
    if (i % 2 === 0) {
      switch (i) {
        case 0:
          if (index[i] === index[i + 1] && index[i] === index[i + 2]) {
            return true;
          }
          break;

        case 2:
          // Code for case 2
          break;

        case 6:
          // Code for case 6
          break;

        case 8:
          // Code for case 8
          break;

        default:
          return false
        // Code to execute if no case matches
      }
    }

 /*
  conditions
  0 = 1 = 2
  3 = 4 = 5
  6 = 7 = 8
  */
  };

  const handleClick = (i: number) => {
    console.log(index.values());
    console.log(winner);
    
    if (!checkWinner(i)) {
      if (value === "O") setValue("X");
      else if (value === "X") setValue("O");

      const array = [...index];
      if (array[i] === undefined) {
        array[i] = value;
        setIndex(array);
      }
    } else setWinner(value);
  };

  return (
    <Wrapper>
      <div className="bg-white   w-full h-[100vh] flex justify-center   ">
        <div className="">
          <h1 className="text-center text-blue-500 font-semibold text-[1.5rem] mb-5 underline underline-offset-8">
            Tic Tac Toe
          </h1>
          <span className="border-blue-600 w-[100px]  h-[40px] ">
            Player: {value}
          </span>
          {[0, 1, 2].map((v1: number, ind1: number) => {
            return (
              <div key={ind1} className="">
                {[v1 * 3 + 0, v1 * 3 + 1, v1 * 3 + 2].map((v2: number) => {
                  return (
                    <Button
                      onClick={() => handleClick(v2)}
                      key={v2}
                      className={`${btnStyles}`}
                    >
                      {index[v2]}
                    </Button>
                  );
                })}
              </div>
            );
          })}
          <Button
            onClick={() => {
              setIndex([]);
              setValue("X");
              setWinner("");
            }}
            className="w-full bg-blue-600 text-white mt-3"
          >
            {" "}
            Start New Game{" "}
          </Button>
        </div>

        {/*  
0 1 2 
3 4 5
6 7 8
*/}
        {/* <div>
         
          <div className="p-0 m-0">
            <button
              onClick={() => handleClick(0)}
              className={btnStyles + "border border-r-2 border-b-2"}
            >
              {index[0]}
            </button>
            <button
              onClick={() => handleClick(1)}
              className={btnStyles + "border border-r-2 border-b-2"}
            >
              {index[1]}
            </button>
            <button
              onClick={() => handleClick(2)}
              className={btnStyles + borderBottom}
            >
              {index[2]}
            </button>
          </div>
          <div className="p-0 m-0">
            <button
              onClick={() => handleClick(3)}
              className={btnStyles + "border border-r-2 border-b-2"}
            >
              {index[3]}
            </button>
            <button
              onClick={() => handleClick(4)}
              className={btnStyles + "border border-r-2 border-b-2"}
            >
              {index[4]}
            </button>
            <button
              onClick={() => handleClick(5)}
              className={btnStyles + borderBottom}
            >
              {index[5]}
            </button>
          </div>
          <div className="p-0 m-0">
            <button
              onClick={() => handleClick(6)}
              className={btnStyles + borderRight}
            >
              {index[6]}
            </button>
            <button
              onClick={() => handleClick(7)}
              className={btnStyles + borderRight}
            >
              {index[7]}
            </button>
            <button onClick={() => handleClick(8)} className={btnStyles}>
              {index[8]}
            </button>
          </div>
          <Button
            onClick={() => setIndex([])}
            className="w-full bg-blue-600 text-white"
          >
            {" "}
            Start New Game{" "}
          </Button>
        </div> */}
      </div>
    </Wrapper>
  );
};

export default DateAndTime;
