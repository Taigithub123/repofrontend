
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table,
  Modal,
  ModalBody,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
function Orderdrink() {
  const [open, setOpen] = useState(false);
  // const [status, setStatus]=useState({
  const [show, setShow] = useState(false);
  // })
  const [madonhang, setMadonhang] = useState("2376427");
  const [name, setName] = useState("2376427");
  const [categorys, setCategorys] = useState("2376427");
  const [price, setPrice] = useState("2376427");
  const [address, setAddress] = useState("2376427");
  const [email, setEmail] = useState("2376427");
  const [phone, setPhone] = useState("2376427");
  return (
    <>
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Danh Sách Đơn hàng</CardTitle>
            <div className="d-flex">
              <CardSubtitle className="mb-2 text-muted me-auto" tag="h6">
                Tất cả sản phẩm có trong cửa hàng
              </CardSubtitle>
            </div>
            <Table className="no-wrap mt-3 align-middle" responsive borderless>
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Tên người đặt</th>
                  <th>Tổng Tiền</th>
                  <th>Địa chỉ</th>
                  <th>Thao Tác</th>
                </tr>
              </thead>
              <tbody>

                <tr>
                  <td>584928</td>
                  <td>TÀI</td>
                  <td>ĐẶNG THÁI TÀI</td>
                  <td>300000</td>
                  <td>Tô Ngọc Vân</td>
                  <td>
                    <div>
                      <button
                        onClick={() => setOpen(true)}
                        className="btn"
                        color="primary"
                        type="button"
                        class="btn btn-success"
                      >
                        Trạng Thái
                      </button>
                      <button
                        onClick={() => setShow(true)}
                        type="button"
                        class="btn btn-primary"
                      >
                        Chi tiết
                      </button>
                    </div>
                    <button style={{ marginLeft: "80px" }}

                      type="button"
                      class="btn btn-danger"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>

              </tbody>
            </Table>
          </CardBody>
          <Modal isOpen={open} toggle={() => setOpen(false)} style={{ paddingTop: "20%" }}>
            <ModalBody>
              <FormGroup>
                <Label for="productCategory">Trạng thái</Label>
                < Input
                  type="select"
                >
                  <option >Chờ giao hàng</option>
                  <option >Đang giao hàng</option>
                  <option >Đã giao hàng</option>
                </ Input>
              </FormGroup>
              <Button onClick={() => setOpen(false)} outline color="danger">
                Close
              </Button>
            </ModalBody>
          </Modal>
          <Modal isOpen={show} toggle={() => setShow(false)} >
            <ModalBody>
              <FormGroup>
                <Label for="productCategory">Mã đơn hàng</Label>
                < Input
                  value={madonhang}
                  onChange={(e) => setMadonhang(e.target.value)}
                >
                  42782
                </ Input>
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Tên khách hàng</Label>
                < Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                >
                  Tài
                </ Input>
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">loại thanh toán</Label>
                < Input
                  value={categorys}
                  onChange={(e) => setCategorys(e.target.value)}
                >
                  Nhận hàng khi thanh toán
                </ Input>
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Tổng tiền</Label>
                < Input
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                >
                  sfsdf
                </ Input>
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Địa chỉ</Label>
                < Input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                >
                  Ghềnh ráng
                </ Input>
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Email</Label>
                < Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}

                >
                  tai@gmail.com
                </ Input>
              </FormGroup>
              <FormGroup>
                <Label for="productCategory">Số địa thoại</Label>
                < Input
                  value={phone}

                  onChange={(e) => setPhone(e.target.value)}
                >
                  238787634
                </ Input>
              </FormGroup>
              <Button onClick={() => setShow(false)} outline color="danger">
                Close
              </Button>
            </ModalBody>
          </Modal>
        </Card>

      </div>
    </>
  );
};
export default Orderdrink;

