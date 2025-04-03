import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const API_URL = process.env.REACT_APP_API_URL || "http://127.0.0.1:8000";
console.log(API_URL);

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/products`)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    // Data for visualization
    const chartData = products.map(p => ({ name: p.name, price: p.price }));

    return (
        <div style={{ padding: "20px" }}>
            <h1>Navid's Data Pipeline Dashboard: Demo for Western Digital</h1>
            
            {/* Data Table*/}
            <Table 
                dataSource={products} 
                columns={[
                    { title: "Name", dataIndex: "name", key: "name" },
                    { title: "Price", dataIndex: "price", key: "price" },
                    { title: "Category", dataIndex: "category", key: "category" }
                ]} 
                rowKey="id"
                pagination={{ pageSize: 10 }}
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