import React from "react";
import { Table, Card, Tag, Space } from "antd";
import {
  DollarOutlined,
  CalendarOutlined,
  CreditCardOutlined,
} from "@ant-design/icons";

interface Item {
  name: string;
  price: number;
  quantity: number;
}

interface Buyer {
  name: string;
  email: string;
}

interface Seller {
  name: string;
  email: string;
}

interface Order {
  orderId: string;
  buyer: Buyer;
  seller: Seller;
  items: Item[];
  totalAmount: number;
  status: string;
  orderDate: string;
  paymentMethod: string;
}

const mockOrders: Order[] = [
  {
    orderId: "ORD-001",
    buyer: {
      name: "Alice Johnson",
      email: "alice@example.com",
    },
    seller: {
      name: "Vintage Finds",
      email: "vintagefinds@market.com",
    },
    items: [
      {
        name: "Antique Clock",
        price: 45.0,
        quantity: 1,
      },
    ],
    totalAmount: 45.0,
    status: "Shipped",
    orderDate: "2023-10-01T10:00:00Z",
    paymentMethod: "Credit Card",
  },
  {
    orderId: "ORD-002",
    buyer: {
      name: "Bob Smith",
      email: "bob@example.com",
    },
    seller: {
      name: "Handmade Crafts",
      email: "crafts@market.com",
    },
    items: [
      {
        name: "Wooden Bowl",
        price: 25.0,
        quantity: 2,
      },
      {
        name: "Ceramic Mug",
        price: 15.0,
        quantity: 1,
      },
    ],
    totalAmount: 65.0,
    status: "Delivered",
    orderDate: "2023-10-02T14:30:00Z",
    paymentMethod: "PayPal",
  },
  {
    orderId: "ORD-003",
    buyer: {
      name: "Charlie Brown",
      email: "charlie@example.com",
    },
    seller: {
      name: "Retro Toys",
      email: "toys@market.com",
    },
    items: [
      {
        name: "Vintage Action Figure",
        price: 30.0,
        quantity: 1,
      },
    ],
    totalAmount: 30.0,
    status: "Pending",
    orderDate: "2023-10-03T09:15:00Z",
    paymentMethod: "Debit Card",
  },
  {
    orderId: "ORD-004",
    buyer: {
      name: "Diana Prince",
      email: "diana@example.com",
    },
    seller: {
      name: "Book Nook",
      email: "books@market.com",
    },
    items: [
      {
        name: "Rare Comic Book",
        price: 50.0,
        quantity: 1,
      },
      {
        name: "Classic Novel",
        price: 20.0,
        quantity: 1,
      },
    ],
    totalAmount: 70.0,
    status: "Shipped",
    orderDate: "2023-10-04T16:45:00Z",
    paymentMethod: "Credit Card",
  },
  {
    orderId: "ORD-005",
    buyer: {
      name: "Eve Wilson",
      email: "eve@example.com",
    },
    seller: {
      name: "Jewelry Gems",
      email: "jewelry@market.com",
    },
    items: [
      {
        name: "Silver Necklace",
        price: 60.0,
        quantity: 1,
      },
    ],
    totalAmount: 60.0,
    status: "Delivered",
    orderDate: "2023-10-05T11:20:00Z",
    paymentMethod: "PayPal",
  },
  {
    orderId: "ORD-006",
    buyer: {
      name: "Frank Miller",
      email: "frank@example.com",
    },
    seller: {
      name: "Music Memorabilia",
      email: "music@market.com",
    },
    items: [
      {
        name: "Vinyl Record",
        price: 35.0,
        quantity: 1,
      },
      {
        name: "Concert Poster",
        price: 10.0,
        quantity: 2,
      },
    ],
    totalAmount: 55.0,
    status: "Pending",
    orderDate: "2023-10-06T13:10:00Z",
    paymentMethod: "Debit Card",
  },
  {
    orderId: "ORD-007",
    buyer: {
      name: "Grace Lee",
      email: "grace@example.com",
    },
    seller: {
      name: "Art Supplies",
      email: "art@market.com",
    },
    items: [
      {
        name: "Oil Paint Set",
        price: 40.0,
        quantity: 1,
      },
    ],
    totalAmount: 40.0,
    status: "Shipped",
    orderDate: "2023-10-07T08:50:00Z",
    paymentMethod: "Credit Card",
  },
  {
    orderId: "ORD-008",
    buyer: {
      name: "Henry Davis",
      email: "henry@example.com",
    },
    seller: {
      name: "Electronics Hub",
      email: "electronics@market.com",
    },
    items: [
      {
        name: "Retro Radio",
        price: 75.0,
        quantity: 1,
      },
    ],
    totalAmount: 75.0,
    status: "Delivered",
    orderDate: "2023-10-08T15:25:00Z",
    paymentMethod: "PayPal",
  },
  {
    orderId: "ORD-009",
    buyer: {
      name: "Ivy Chen",
      email: "ivy@example.com",
    },
    seller: {
      name: "Clothing Corner",
      email: "clothing@market.com",
    },
    items: [
      {
        name: "Vintage Dress",
        price: 55.0,
        quantity: 1,
      },
      {
        name: "Leather Boots",
        price: 80.0,
        quantity: 1,
      },
    ],
    totalAmount: 135.0,
    status: "Pending",
    orderDate: "2023-10-09T12:40:00Z",
    paymentMethod: "Debit Card",
  },
  {
    orderId: "ORD-010",
    buyer: {
      name: "Jack Taylor",
      email: "jack@example.com",
    },
    seller: {
      name: "Home Decor",
      email: "decor@market.com",
    },
    items: [
      {
        name: "Throw Pillow",
        price: 20.0,
        quantity: 3,
      },
    ],
    totalAmount: 60.0,
    status: "Shipped",
    orderDate: "2023-10-10T17:05:00Z",
    paymentMethod: "Credit Card",
  },
];

const Orders: React.FC = () => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId" as keyof Order,
      key: "orderId",
      render: (text: string) => (
        <span className="font-semibold text-blue-600">{text}</span>
      ),
    },
    {
      title: "Buyer",
      dataIndex: "buyer" as keyof Order,
      key: "buyer",
      render: (buyer: Buyer) => (
        <div>
          <div className="font-medium">{buyer.name}</div>
          <div className="text-gray-500 text-sm">{buyer.email}</div>
        </div>
      ),
    },
    {
      title: "Seller",
      dataIndex: "seller" as keyof Order,
      key: "seller",
      render: (seller: Seller) => (
        <div>
          <div className="font-medium">{seller.name}</div>
          <div className="text-gray-500 text-sm">{seller.email}</div>
        </div>
      ),
    },
    {
      title: "Items",
      dataIndex: "items" as keyof Order,
      key: "items",
      render: (items: Item[]) => (
        <ul className="list-disc list-inside text-sm">
          {items.map((item, index) => (
            <li key={index}>
              {item.name} (Qty: {item.quantity}) - ${item.price.toFixed(2)}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Total",
      dataIndex: "totalAmount" as keyof Order,
      key: "totalAmount",
      render: (amount: number) => (
        <Space>
          <DollarOutlined />
          <span className="font-bold text-green-600">{amount.toFixed(2)}</span>
        </Space>
      ),
    },
    {
      title: "Status",
      dataIndex: "status" as keyof Order,
      key: "status",
      render: (status: string) => {
        let color: string = "default";
        if (status === "Shipped") color = "blue";
        else if (status === "Delivered") color = "green";
        else if (status === "Pending") color = "orange";
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Order Date",
      dataIndex: "orderDate" as keyof Order,
      key: "orderDate",
      render: (date: string) => (
        <Space>
          <CalendarOutlined />
          <span>{new Date(date).toLocaleDateString()}</span>
        </Space>
      ),
    },
    {
      title: "Payment",
      dataIndex: "paymentMethod" as keyof Order,
      key: "paymentMethod",
      render: (method: string) => (
        <Space>
          <CreditCardOutlined />
          <span>{method}</span>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <Card
        title="Flea Market Orders"
        className="shadow-lg rounded-lg"
        styles={{
          header: {
            backgroundColor: "#f0f2f5",
            fontSize: "1.25rem",
            fontWeight: "bold",
          },
        }}
      >
        <Table<Order>
          dataSource={mockOrders}
          columns={columns}
          rowKey="orderId"
          pagination={{ pageSize: 5 }}
          className="rounded-lg"
        />
      </Card>
    </div>
  );
};

export default Orders;
