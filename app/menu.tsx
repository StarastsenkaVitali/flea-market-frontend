import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Menu as AntdMenu } from "antd";
import {
  HomeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  AppstoreOutlined
} from "@ant-design/icons";
import { format } from "path";

export default function Menu(): React.JSX.Element {
  const { user, isLoading } = useUser();

  const allMenuItems = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: <Link href="/">Home</Link>,
    },
    // {
    //   key: "3",
    //   icon: <UserOutlined />,
    //   label: <a href="/auth/login?screen_hint=signup">Sign up</a>,
    // },
    {
      key: "auth",
      icon: <UserOutlined />,
      label: user ? (
        <a href="/auth/logout">Log out</a>
      ) : (
        <a href="/auth/login">Log in</a>
      ),
    },
    {
      key: "profile",
      icon: <UserOutlined />,
      label: <a href="/profile">Profile</a>,
      requiredAuth: true,
    },
    {
      key: "categories",
      icon: <AppstoreOutlined />,
      label: <a href="/categories">Categories</a>,
      children: [
      { key: '3', label: 'Option 3' },
      { key: '4', label: 'Option 4' },
      {
        key: 'sub1-2',
        label: 'Submenu',
        children: [
          { key: '5', label: 'Option 5' },
          { key: '6', label: 'Option 6' },
        ],
      },
    ],
    },
    {
      key: "orders",
      icon: (
        <div>
          <ShoppingCartOutlined height={48} width={48} />
        </div>
      ),
      label: <Link href="/orders">Orders</Link>,
      requiredAuth: true,
    },
    {
      key: "users",
      icon: (
        <div>
          <ShoppingCartOutlined height={48} width={48} />
        </div>
      ),
      label: <Link href="/users">users</Link>,
      requiredRole: "admin",
    },
  ];
  const filteredMenuItems = allMenuItems
    .filter((item) => {
      if (item.requiredAuth) return !!user;

      if (item.requiredRole)
        return item.requiredRole === user?.role;

      return true;
    })
    .map(({ requiredAuth, requiredRole, ...cleanItem }) => cleanItem);
  if (isLoading) return <></>
  return (
    <AntdMenu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={["home"]}
      items={filteredMenuItems}
    />
  );
}
