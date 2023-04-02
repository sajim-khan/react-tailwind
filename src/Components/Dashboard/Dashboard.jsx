import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {
  const marksArray = [
    { id: 1, name: "John", phy: 80, chem: 90, math: 85, value: 75 },
    { id: 2, name: "Alice", phy: 75, chem: 55, math: 95, value: 80 },
    { id: 3, name: "Bob", phy: 60, chem: 70, math: 80, value: 65 },
    { id: 4, name: "Sarah", phy: 35, chem: 80, math: 75, value: 70 },
    { id: 5, name: "Mike", phy: 70, chem: 95, math: 85, value: 90 },
    { id: 6, name: "Emily", phy: 75, chem: 65, math: 80, value: 75 },
    { id: 7, name: "Tom", phy: 80, chem: 70, math: 20, value: 85 },
    { id: 8, name: "Linda", phy: 45, chem: 85, math: 60, value: 75 },
    { id: 9, name: "Alex", phy: 70, chem: 8, math: 85, value: 80 },
    { id: 10, name: "Sara", phy: 45, chem: 30, math: 70, value: 85 },
    { id: 11, name: "Peter", phy: 80, chem: 75, math: 85, value: 75 },
    { id: 12, name: "Karen", phy: 5, chem: 80, math: 75, value: 70 },
  ];

  return (
    <div className="m-12">
        <LineChart width={1000} height={300} data={marksArray}>
          <Line dataKey="phy"></Line>
          <Line dataKey="chem"></Line>
          <Line stroke="#8884d8" dataKey="math"></Line>
          <Line stroke="#82ca9d" dataKey="value"></Line>
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
    </div>
  );
};

export default Dashboard;
