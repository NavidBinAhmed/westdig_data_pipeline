import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const API_URL = process.env.REACT_APP_API_URL || "https://fastapi-f3s0.onrender.com";
console.log("API_URL:", API_URL);

const App = () => {
  const [products, setProducts] = useState([]);
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
      .then((products) => {
        console.log("Fetched Data:", data);
        setData(products);
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
    <div style={{ padding: "20px" }}>
      <h1> Data Pipeline Dashboard</h1>
      
    {/* Data Table */}
    <Table 
        dataSource={products} 
        columns={[
        { title: "Name", dataIndex: "name", key: "name" },
        { title: "Price", dataIndex: "price", key: "price" },
        { title: "Category", dataIndex: "category", key: "category" }
        ]} 
        rowKey="id"
        pagination={{ pageSize: 5 }}
    />

    {/* Bar Chart Visualization */}
        <h2>Price Analysis</h2>
        <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#82ca9d" />
        </BarChart>
        </ResponsiveContainer>
        </div>
    );
}

export default App;