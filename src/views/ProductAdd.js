import axios from "axios";
import { useState, useEffect } from "react";
import {
  Card,
  Row,
  Col,
  CardTitle,
  CardBody,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import Logo1 from "../assets/images/logos/logo1.png"

const ProductAdd = (props) => {
  const product = props.product;
  const [name, setName] = useState(product?.title);
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(product?.category.id);
  const [description, setDescription] = useState(product?.description);
  const [price, setPrice] = useState(product?.price);
  const [images, setImage] = useState(product?.image);

  const handleSubmit = async (e) => {
    e.preventDefault();
    var formdata = new FormData();
    formdata.append("title", name);
    formdata.append("category", categoryId);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("image", images);

    if (product) {
      //handle update
      await axios.post("/api/products/" + product?.id, formdata);
      console.log("Gia: ", price);
      console.log("formData", formdata);
    } else {
      //handle add
      const { data } = await axios.post("/api/products", formdata);
      console.log(data);
    }

    props.onClose();
  };


  // ĐỌC HÌNH ẢNH TỪ FILE TRONG CSDL
  const showImg = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader(file);
    reader.onload = function (event) {
      document.getElementById("img").src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  useEffect(() => {
    const getCategory = async () => {
      const { data } = await axios.get("/api/category");
      setCategory(data);
    };
    getCategory();
  }, []);

  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1*/}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-bell me-2"> </i>
            Nhập sả phẩm
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="productName">Name</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="productName"
                  name="productName"
                  placeholder="Name"
                  type="text"
                  value={name}
                />
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Type</Label>
                <Input
                  onChange={(e) => { setCategoryId(e.target.value); console.log(e.target.value) }}
                  id="productCategory"
                  name="productCategory"
                  type="select"
                  value={categoryId}
                >
                  {console.log(categoryId)}
                  <option value={0}>Option Category</option>
                  {category.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="productDescription">Description</Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  id="productDescription"
                  name="productDescription"
                  placeholder="Description"
                  type="text"
                  value={description}
                />
              </FormGroup>
              <FormGroup>
                <Label for="productPrice">Cost</Label>
                <Input
                  onChange={(e) => setPrice(e.target.value)}
                  id="productPrice"
                  name="productPrice"
                  placeholder="Price"
                  type="number"
                  value={price}
                />
              </FormGroup>

              <FormGroup>

                <Label for="productImage">Image</Label>
                <div>
                  {product?.image != null ? (
                    <img
                      id="img"
                      src={"/upload/" + images}
                      alt={""}
                      height={100}
                      style={{ margin: "0 auto" }} ></img>
                  ) : (
                    <img
                      id="img"
                      src={Logo1}
                      alt={""}
                      height={100}
                      style={{ margin: "0 auto" }}></img >
                  )}
                </div>
                <div>
                  <Input
                    id="productImage"
                    name="productImage"
                    type="file"
                    onChange={(e) => {
                      setImage(e.target.files[0]);
                      showImg(e);
                    }}
                  // value={"sgdsfsd"}
                  // onChange={(e) => setImage(e.target.value)}
                  />
                </div>
              </FormGroup>

              <Button type="submit" color="success" outline>
                Enter
              </Button>


            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductAdd;