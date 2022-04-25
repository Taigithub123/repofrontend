import {
  Table,
  Card,
  CardBody,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { HiEye } from "react-icons/hi";

export default function CheckoutList() {
  const [item, setItem] = useState(null);
  const [openDetail, setOpenDetail] = useState(false);
  const [checkouts, setCheckouts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProductByCheckoutId = async () => {
      if (item) {
        const { data } = await axios.get("/api/checkout/detail/" + item.id);
        setProducts(data);
      }
    };
    getProductByCheckoutId();
  }, [item, openDetail]);

  useEffect(() => {
    const fetchCheckouts = async () => {
      const { data } = await axios.get("/api/checkout");
      setCheckouts(data);
    };
    fetchCheckouts();
  });
  const handleOpenDetail = (item) => {
    setOpenDetail(true);
    setItem(item);
  };

  return (
    <div>
      <Card>
        <CardBody>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>ID đơn hàng</th>
                <th>Người dùng</th>
                <th>Địa chỉ</th>
                <th>Tổng tiền</th>
                <th>Ngày tạo</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {checkouts.map((c, i) => (
                <tr key={i} className="border-top">
                  <td>
                    {c.id}-{c.checkoutId}
                  </td>
                  <td>{c.user.username}</td>
                  <td>{`${c.address}, ${c.commune}, ${c.district}, ${c.province}`}</td>
                  {/* <td>{c.phone}</td> */}
                  <td>{c.totalPrice}.000₫</td>
                  <td>{c.createdAt}</td>
                  <td>
                    <Button onClick={() => handleOpenDetail(c)} color="primary">
                      <HiEye />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <Modal
        toggle={() => {
          setOpenDetail(!openDetail);
        }}
        isOpen={openDetail}
      >
        <ModalHeader
          toggle={() => {
            setOpenDetail(!openDetail);
          }}
        >
          Chi tiết đơn hàng
        </ModalHeader>
        <ModalBody>
          <Table borderless>
            <thead>
              <tr>
                <th>Tên Sản Phẩm</th>
                <th>Số Lượng</th>
                <th>Giá Tiền</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={index}>
                  <td>{item.product.title}</td>
                  <td>{item.quantity}</td>
                  <td>{item.product.price * item.quantity}.000₫</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {item && (
            <div>
              {products.length > 0 && (
                <p>
                  <strong>Thành Tiền: </strong>
                  {products.reduce((p, c) => {
                    return p + c.product.price * c.quantity;
                  }, 0)}
                  .000₫
                </p>
              )}

              <p>
                <strong>Địa Chỉ: </strong>
                {`${item.address}, ${item.commune}, ${item.district}, ${item.province}`}
              </p>
              <p>
                <strong>SĐT:</strong>
                {item.phone}
              </p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() { }}>
            In Đơn Hàng
          </Button>{" "}
          <Button
            onClick={() => {
              setOpenDetail(!openDetail);
            }}
          >
            Đóng
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
