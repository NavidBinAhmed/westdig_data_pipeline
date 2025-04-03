import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const API_URL = process.env.REACT_APP_API_URL || "https://fastapi-f3s0.onrender.com";
console.log("API_URL:", API_URL);

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${API_URL.replace(/\/$/, "")}/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response is not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1> Data Pipeline Dashboard</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#84d888" />
        </BarChart>
      </ResponsiveContainer>
      <Table
  dataSource={data}
  columns={[
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "price" },
    { title: "Category", dataIndex: "category", key: "category" }
  ]} />
    </div>
  );
};

export default App;