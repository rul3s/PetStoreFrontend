import { IProduct } from "../../types/global.typing";
import "./products.scss";
import { useState, useEffect } from "react";

interface Props {}

const Products: React.FC = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  return (
    <div className="products">
      <h1></h1>
    </div>
  );
};

export default Products;
