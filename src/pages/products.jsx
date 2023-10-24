import React from "react";

import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import ProductCard from "../productCard";
import { supabase } from "../supabaseClient";

const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const { data, error } = await supabase
        .from("product")
        .select("*")
        .order("created_at", { ascending: false })
        .eq("showInStorefront", true);
      if (error) throw error;
      if (data != null) {
        setProducts(data);
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <div className="right">
        <Row>
          <Col xs={12} md={8}>
            <h3>EXAMPLE STORE FRONT</h3>
            <hr></hr>
            <h4>Products</h4>
            <hr></hr>
            <Row xs={1} lg={2} className="g-3">
              {products.map((product) => (
                <Col key={product.id}>
                  <ProductCard product={product} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Products;
