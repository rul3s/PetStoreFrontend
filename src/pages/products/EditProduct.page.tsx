import React from "react";
import "./products.scss";
import { IProduct } from "../../types/global.typing";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl, productsUrl } from "../../constants/url.constant";

interface Props {}

const EditProduct: React.FC = (props: Props) => {
  const [product, setProduct] = React.useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });

  const redirect = useNavigate();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveBtnClick = () => {
    if (product.title === "" || product.brand === "") {
      alert("Enter all needed values");
      return;
    }

    const data: Partial<IProduct> = {
      brand: product.brand,
      title: product.title,
    };

    axios
      .post(productsUrl, data)
      .then((response) =>
        redirect("/products", {
          state: { message: "Product Created Successfully" },
        })
      )
      .catch((error) => alert("Error"));
  };
  const handleBackBtnClick = () => {
    redirect("/products");
  };

  return (
    <div className="add-product">
      <h2>Create new product</h2>
      <TextField
        autoComplete="off"
        label="Brand"
        name="brand"
        variant="outlined"
        value={product.brand}
        onChange={changeHandler}
      />
      <TextField
        autoComplete="off"
        label="Title"
        name="title"
        variant="outlined"
        value={product.title}
        onChange={changeHandler}
      />
      <div>
        <Button variant="outlined" color="primary" onClick={handleSaveBtnClick}>
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={handleBackBtnClick}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default EditProduct;
