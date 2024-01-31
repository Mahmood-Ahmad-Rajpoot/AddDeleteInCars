import React from "react";

import { Button } from "antd";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

interface DrivingModeProps {
  setMode: (mode: string) => void;
  mode: string;
}
const DrivingModesButton: React.FC<DrivingModeProps> = ({ mode, setMode }) => {
  return (
    <div className="w-full justify-center flex gap-3 mt-3">
      <Button
        type="link"
        className={`${
          mode === "driving" && "border-blue-600 bg-blue-200"
        } rounded-full flex items-center justify-center`}
        onClick={() => setMode("driving")}
      >
        <DirectionsCarIcon className="" />
      </Button>
      <Button
        type="link"
        className={`${
          mode === "walking" && "border-blue-600 bg-blue-200"
        } rounded-full flex items-center justify-center`}
        onClick={() => setMode("walking")}
      >
        <DirectionsWalkIcon />
      </Button>
      <Button
        type="link"
        className={`${
          mode === "bicycling" && "border-blue-600 bg-blue-200"
        } rounded-full flex items-center justify-center`}
        onClick={() => setMode("bicycling")}
      >
        <TwoWheelerIcon />
      </Button>
      <Button
        type="link"
        className={`${
          mode === "transit" && "border-blue-600 bg-blue-200"
        } rounded-full flex items-center justify-center`}
        onClick={() => setMode("transit")}
      >
        <DirectionsBusIcon />
      </Button>
    </div>
  );
};

export default DrivingModesButton;
