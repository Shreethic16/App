import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Product Name',
    dataIndex: 'productName',
    key: 'productName',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
];

const data = [
  {
    key: '1',
    productName: 'Product 1',
    price: 10,
    quantity: 2,
    total: 20,
  },
  {
    key: '2',
    productName: 'Product 2',
    price: 15,
    quantity: 3,
    total: 45,
  },
  // Add more product data as needed
];

const OutputPage = () => {
  return (
    <div>
      <h1>Products to Buy</h1>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default OutputPage;
