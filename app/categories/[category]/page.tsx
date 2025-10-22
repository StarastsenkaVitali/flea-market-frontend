import Category from "../category";
import Link from "next/link";
import { Button } from "antd";
import { LeftOutlined  } from "@ant-design/icons";
interface CategoryPageProps {
  params: Promise<{ category: string }>;
}
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  return (
    <>
      <Link href={"/categories"}>
        <Button type="primary" icon={<LeftOutlined />} size={"middle"} />
      </Link>
      <Category name={category} className="p-3" />
    </>
  );
}
