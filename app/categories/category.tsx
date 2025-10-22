type CategoryProps = {
  name: string;
  className: string;
};

const Category: React.FC<CategoryProps> = (props) => {
  return <p className={props.className}>{decodeURIComponent(props.name)}</p>;
};

export type { CategoryProps };
export default Category;
