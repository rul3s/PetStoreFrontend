import { useState, useEffect } from "react";
import "./products.scss";
import axios from "axios";
import { IProduct } from "../../types/global.typing";
import { productsUrl } from "../../constants/url.constant";
import { Button } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import moment from "moment";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";

interface Props {}

const Products: React.FC = (props: Props) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const location = useLocation();
  const redirect = useNavigate();

  const fetchProductList = async () => {
    try {
      const response = await axios.get<IProduct[]>(productsUrl);
      setProducts(response.data);
      if (location?.state) {
        Swal.fire({
          icon: "success",
          title: "Produc added succesfully",
          text: location?.state?.message,
        });
        redirect(location.pathname, { replace: true });
      }
    } catch (error) {
      alert("An Error Happened");
    }
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  console.log(products);

  return (
    <div className="products">
      <h1>Products List</h1>
      {products.length === 0 ? (
        <h1>No products</h1>
      ) : (
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Brand</th>
                <th>Creation Time</th>
                <th>Update Time</th>
                <th>Operations</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.brand}</td>
                  <td>{moment(product.createAt).fromNow()}</td>
                  <td>{moment(product.updateAt).fromNow()}</td>
                  <td>
                    <Button variant="outlined" color="warning" sx={{ mx: 3 }}>
                      <Edit />
                    </Button>
                    <Button variant="outlined" color="error">
                      <Delete />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Products;
