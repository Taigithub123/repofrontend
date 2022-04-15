
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
          <Modal isOpen={show} toggle={() => setShow(false)} style={{ paddingTop: "20%" }}>
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

