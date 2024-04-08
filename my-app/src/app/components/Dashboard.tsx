import React from "react";
import { NewItem } from "./NewItem";

interface DashboardProps {
  title: string;
}

export const Dashboard: React.FC<DashboardProps> = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};
