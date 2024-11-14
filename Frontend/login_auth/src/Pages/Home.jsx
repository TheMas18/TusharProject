import React, { useEffect, useState } from "react";
import jwt_decode from "jwt-decode"; 
import "../Dashboard.css";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import Header from "../Components/Header";
import Sidebar from "../Components/Siderbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [username, setUsername] = useState(""); // State to store the username
  const navigate = useNavigate();
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token); // Retrieve token from localStorage

    if (token) {
      try {
        const decodedToken = jwt_decode(token);
        // Check if token expired
        const currentTime = Date.now() / 1000; // Get current time in seconds
        if (decodedToken.exp < currentTime) {
          localStorage.removeItem("token");
          localStorage.removeItem("username");
          setUsername("Guest");
        } else {
          setUsername(decodedToken?.username || localStorage.getItem("username") || "Guest");
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        setUsername("Guest");
      }
    } else {
      setUsername(localStorage.getItem("username") || "Guest");
    }
  }, []);

  const data = [
    { name: "Rent", value: 575 },
    { name: "Groceries", value: 110 },
    { name: "Utilities", value: 55 },
    { name: "Personal Expenses", value: 20 },
    { name: "Savings", value: 660 },
  ];

  const data01 = [
    { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  ];

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className="main-container">
        <div className="main-title">
          <h1>Welcome, {username}!</h1>
        </div>
        <div className="main-cards">
          <div className="card-inner">
            <button onClick={() => navigate("/add-expense")} className="btn">+ Add Expense</button>
       
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Monthly Budget</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Expense</h3>
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Total Savings</h3>
          </div>
        </div>
        <div className="main-title">
          <h1>Graphical Insights</h1>
        </div>
        <div className="charts">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={150}
                fill="#748d92"
                label
              />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              width={300}
              height={500}
              data={data01}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </main>
    </div>
  );
}

export default Home;
