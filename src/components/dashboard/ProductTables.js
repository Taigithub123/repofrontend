import axios from "axios";
import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import ProductAdd from "../../views/ProductAdd";

const ProductTables = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const navigateToAdd = () => {
    // navigate("/product/add");
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    fetchData();
  };
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Danh Sách Sản Phẩm</CardTitle>
          <div className="d-flex">
            <CardSubtitle className="mb-2 text-muted me-auto" tag="h6">
              Tất cả sản phẩm có trong cửa hàng
            </CardSubtitle>

            <Button onClick={navigateToAdd} className="btn" color="primary">
              Thêm
            </Button>
          </div>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Tên Sản Phẩm</th>
                <th>Loại Sản Phẩm</th>
                <th>Giá Tiền</th>
                <th>Hình Ảnh</th>
                <th>Thao Tác</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index} className="border-top">
                  <td>{item.title}</td>
                  <td>{item.category?.name}</td>
                  <td>{item.price}</td>
                  <td>
                    <img
                      src={"/upload/" + item.image}
                      alt={item.title}
                      height={50}
                    ></img>
                  </td>
                  <td>
                    <Button onClick={navigateToAdd} className="btn" color="warning" style={{ width: "100px" }}>
                      Cập nhật
                    </Button>
                    <Button onClick={navigateToAdd} className="btn" color="danger" style={{ width: "100px" }}>
                      Xóa
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>

      <Modal isOpen={open} toggle={() => setOpen(false)}>
        <ModalBody>
          <ProductAdd onClose={onClose} />
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ProductTables;
