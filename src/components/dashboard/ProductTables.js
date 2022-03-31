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
  ModalFooter,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import ProductAdd from "../../views/ProductAdd";

const ProductTables = () => {
  const [open, setOpen] = useState(false);
  const [openMDelete, setOpenMDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
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
  const deleteProduct = async () => {
    const { data } = await axios.delete("/api/products/" + deleteId);
    console.log(data);
    fetchData();
    setOpenMDelete(false);
  };
  return (
    <>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Danh Sách Sản Phẩm</CardTitle>
            <div className="d-flex">
              <CardSubtitle className="mb-2 text-muted me-auto" tag="h6">
                Tất cả sản phẩm có trong cửa hàng
              </CardSubtitle>

              <Button onClick={navigateToAdd} className="btn" color="primary">
                Thêm Sản Phẩm
              </Button>
            </div>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Tên Sản Phẩm</th>
                  <th>Loại Sản Phẩm</th>
                  <th>Mô Tả</th>
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
                    <td>{item.description}</td>
                    <td>{item.price}</td>
                    <td>
                      <img
                        src={"/upload/" + item.image}
                        alt={item.title}
                        height={50}
                      ></img>
                    </td>
                    <td>
                      <button
                        onClick={() => {
                          setOpen(true);
                          setCurrentProduct(item);
                        }}
                        type="button"
                        class="btn btn-success"
                      >
                        Sửa
                      </button>
                      <button
                        onClick={() => {
                          setOpenMDelete(true);
                          setDeleteId(item.id);
                        }}
                        type="button"
                        class="btn btn-danger"
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>

        <Modal isOpen={open} toggle={() => setOpen(false)}>
          <ModalBody>
            <ProductAdd onClose={onClose} product={currentProduct} />

          </ModalBody>
        </Modal>
      </div>
      <Modal isOpen={openMDelete} toggle={() => setOpenMDelete(false)}>
        <ModalHeader toggle={() => setOpenMDelete(false)}>Delete ?</ModalHeader>
        <ModalBody>Do you want delete this product?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => deleteProduct(deleteId)}>
            Delete
          </Button>{" "}
          <Button onClick={() => setOpenMDelete(false)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default ProductTables;
