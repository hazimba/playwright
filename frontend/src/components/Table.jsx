import React, { useEffect, useState } from "react";
import { Table, Typography } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";
import useProduct from '../store/product'


const { Text } = Typography;

const TableData = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState({ pageSize: 100 });

  const { setProducts } = useProduct();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/pw/getProducts"
        );
        setData(response.data);
        setProducts(response.data)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      title: "No",
      dataIndex: "No",
      key: "No",
      render: (_, __, index) => <Text>{index + 1}</Text>,
    },
    {
      title: "SKU",
      dataIndex: "sku",
      key: "sku",
      render: (text) => <Text copyable>{text}</Text>,
    },
    {
      title: "Original Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <Text copyable>{text}</Text>,
    },
    {
      title: "Formatted Name",
      dataIndex: "formattedName",
      key: "formattedName",
      render: (text) => <Text copyable>{text}</Text>,
    },
    {
      title: "Format Spliced",
      dataIndex: "formatSplicedName",
      key: "formatSplicedName",
      render: (text) => <Text copyable>{text}</Text>,
    },
    {
      title: "Spliced Name",
      dataIndex: "splicedName",
      key: "splicedName",
      render: (text) => <Text copyable>{text}</Text>,
    },
    {
      title: "Exist",
      dataIndex: "exist",
      key: "exist",
      render: (exist) => <Text>{exist ? "✅" : "TBC"}</Text>,
    },
    {
      title: "Download",
      dataIndex: "download",
      key: "download",
      render: (download) => <Text>{download ? "✅" : "❌"}</Text>,
    },
    {
      title: "Upload",
      dataIndex: "upload",
      key: "upload",
      render: (upload) => <Text>{upload ? "✅" : "❌"}</Text>,
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Link to="/">Back</Link>
      <h1>Product List</h1>
      <Table
        rowKey="_id"
        dataSource={data}
        columns={columns}
        bordered
        pagination={{
          pageSize: pagination.pageSize,
          showSizeChanger: true,
          onShowSizeChange: (current, size) =>
            setPagination({ pageSize: size }),
        }}
      />
    </div>
  );
};

export default TableData;
