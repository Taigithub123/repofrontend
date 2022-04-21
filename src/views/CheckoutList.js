import { Table, Card, CardBody } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";

export default function CheckoutList() {
  const [checkouts, setCheckouts] = useState([]);
  useEffect(() => {
    const fetchCheckouts = async () => {
      const { data } = await axios.get("/api/checkout");
      setCheckouts(data);
    };
    fetchCheckouts();
  });
  return (
    <div>
      <Card>
        <CardBody>
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>ID đơn hàng</th>
                <th>Khách hàng</th>
                <th>Địa chỉ</th>
                <th>Điện thoại</th>
                <th>Tổng giá tiền</th>
                <th>Ngày tạo</th>
              </tr>
            </thead>
            <tbody>
              {checkouts.map((c, i) => (
                <tr key={i} className="border-top">
                  <td>
                    {c.id}-{c.checkoutId}
                  </td>
                  <td>{c.user.email}</td>
                  <td>{`${c.address}, ${c.commune}, ${c.district}, ${c.province}`}</td>
                  <td>{c.phone}</td>
                  <td>{c.totalPrice}.000₫</td>
                  <td>{c.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
}
