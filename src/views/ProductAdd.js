import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { HashRouter } from "react-router-dom";

const ProductAdd = (props) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImage] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, categoryId, description, price, images);
    var formdata = new FormData();
    formdata.append("title", name);
    formdata.append("category", categoryId);
    formdata.append("description", description);
    formdata.append("price", price);
    formdata.append("image", images);
    const { data } = await axios.post("/api/products", formdata);
    console.log(data);
    props.onClose();
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
            Nhập Sản Phẩm
          </CardTitle>
          <CardBody>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label for="productName">Tên Sản Phẩm</Label>
                <Input
                  onChange={(e) => setName(e.target.value)}
                  id="productName"
                  name="productName"
                  placeholder="Name"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Loại Sản Phẩm</Label>
                <Input
                  onChange={(e) => setCategoryId(e.target.value)}
                  id="productCategory"
                  name="productCategory"
                  type="select"
                >
                  {category.map(({ id, name }) => (
                    <option value={id}>{name}</option>
                  ))}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="productDescription">Mô Tả</Label>
                <Input
                  onChange={(e) => setDescription(e.target.value)}
                  id="productDescription"
                  name="productDescription"
                  placeholder="Description"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="productPrice">Giá Tiền</Label>
                <Input
                  onChange={(e) => setPrice(e.target.value)}
                  id="productPrice"
                  name="productPrice"
                  placeholder="Price"
                  type="number"
                />
              </FormGroup>

              <FormGroup>
                <Label for="productImage">Hình Ảnh</Label>
                <Input
                  id="productImage"
                  name="productImage"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </FormGroup>
              <Button type="submit">Nhập</Button>
              {/* <Button onClick={handleCancel} className="btn" color="primary">
                Cancel
              </Button> */}
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProductAdd;
