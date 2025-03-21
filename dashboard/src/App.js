import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const API_URL = "http://127.0.0.1:8000/products/";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      axios.get(API_URL)
          .then(response => {
              console.log("Fetched Data:", response.data);  // for Debugging
              setProducts(response.data);
          })
          .catch(error => console.error("Error fetching products:", error));
  }, []);
  

    // Data for visualization
    const chartData = products.map(p => ({ name: p.name, price: p.price }));

    return (
        <div style={{ padding: "20px" }}>
            <h1>Navid's Data Pipeline Dashboard: Demo for Western Digital</h1>
            
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