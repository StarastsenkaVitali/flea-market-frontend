import Category, { CategoryProps } from "./category";
import Link from "next/link";
type CategoriesProps = {
  items?: string[];
};

const categories: string[] = [
  "Antiques",
  "Vintage",
  "Collectibles",
  "Retro clothing",
  "Handmade crafts",
  "Home decor",
  "Housewares",
];

const Categories: React.FC<CategoriesProps> = (props) => {
  const catgs = props.items ?? categories;
  return (
    <div className="flex flex-col">
      {catgs.map((category) => (
        <Link key={category} href={`/categories/${encodeURIComponent(category)}`}>
          {category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
export { categories };
