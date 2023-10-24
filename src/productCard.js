import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const redirectToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="products">
      <Card
        style={{ width: "18rem", backgroundColor: "black", border: "dotted" }}
      >
        <Card.Body>
          <>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <Button className="me-1" variant="warning" onClick={redirectToCart}>
              Add to cart
            </Button>
          </>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
