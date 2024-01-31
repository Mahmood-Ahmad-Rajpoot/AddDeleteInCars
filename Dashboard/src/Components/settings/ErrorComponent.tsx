import React, { ReactNode } from "react";

interface ErrorComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const ErrorComponent: React.FC<ErrorComponentProps> = ({ children}) => {
  return (
    <div className="text-[red]" >
      {children}
    </div>
  );
};

export default ErrorComponent;
