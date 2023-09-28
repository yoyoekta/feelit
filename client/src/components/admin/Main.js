import React from "react";
import { Link } from "react-router-dom";
import {
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const stockData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];

const Main = () => {
  return (
    <div className="px-5 w-full text-color">
      <div className="grid grid-cols-4 auto-rows-fr gap-2">
        <div className="flex flex-col border border-grey rounded-md p-1 m-1 h-60">
          <div className="basis-1/4 flex justify-between">
            <h1 className="p-2 text-medium">Total Products</h1>
            <h1 className="p-2 text-xl font-bold">238</h1>
          </div>
          <div className="basis-3/4 flex flex-col">
            <div className="basis-1/5 flex justify-between">
              <span className="p-2 text-medium">In Stock</span>
              <span className="p-2 text-medium">Out of Stock</span>
            </div>
            <div className="h-full w-full">
              <ResponsiveContainer width="99%" height="100%">
                <PieChart
                  margin={{ top: 80}}
                >
                  <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={stockData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="flex border border-grey rounded-md p-1 m-1">
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="p-2 text-medium">Total Users</h1>
            <h1 className="p-2 text-xl font-bold">1.4K</h1>
            <Link to="/admin/users" className="p-2 text-medium">
              View All
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-between p-2">
            <div className="h-full w-full">
              <ResponsiveContainer width="99%" height="100%">
                <LineChart data={data}>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 25, y: 80 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-normal items-end">
              <p className="px-1 text-base font-bold text-green-400">45%</p>
              <p className="px-1 text-xs text-grey-900">this month</p>
            </div>
          </div>
        </div>
        <div className="flex border border-grey rounded-md p-1 m-1">
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="p-2 text-medium">Total Users</h1>
            <h1 className="p-2 text-xl font-bold">1.4K</h1>
            <Link to="/admin/users" className="p-2 text-medium">
              View All
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-between p-2">
            <div className="h-full w-full">
              <ResponsiveContainer width="99%" height="100%">
                <LineChart data={data}>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 25, y: 80 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-normal items-end">
              <p className="px-1 text-base font-bold text-green-400">45%</p>
              <p className="px-1 text-xs text-grey-900">this month</p>
            </div>
          </div>
        </div>
        <div className="flex border border-grey rounded-md p-1 m-1">
          <div className="flex-1 flex flex-col justify-between">
            <h1 className="p-2 text-medium">Total Users</h1>
            <h1 className="p-2 text-xl font-bold">1.4K</h1>
            <Link to="/admin/users" className="p-2 text-medium">
              View All
            </Link>
          </div>
          <div className="flex-1 flex flex-col justify-between p-2">
            <div className="h-full w-full">
              <ResponsiveContainer width="99%" height="100%">
                <LineChart data={data}>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "transparent",
                      border: "none",
                    }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 25, y: 80 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-col justify-normal items-end">
              <p className="px-1 text-base font-bold text-green-400">45%</p>
              <p className="px-1 text-xs text-grey-900">this month</p>
            </div>
          </div>
        </div>
        <div className="border border-grey rounded-md p-1 m-1 row-span-2 col-span-2">
          <h1 className="p-2 text-medium">Total Revenue</h1>
          <h1 className="p-2 text-xl font-bold">1 Cr</h1>
        </div>
        <div className="border border-grey rounded-md p-1 m-1 row-span-2 col-span-2">
          <h1 className="p-2 text-medium">Total Revenue</h1>
          <h1 className="p-2 text-xl font-bold">1 Cr</h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
