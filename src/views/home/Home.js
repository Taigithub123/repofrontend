import { Row, Col, Container } from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("/api/products");
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <h5 className="mb-3">Basic Card</h5>
      <Row>
        {products.map((product, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Blog
              image={"/upload/" + product.image}
              title={product.title}
              subtitle={product.description}
              text={product.price}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
