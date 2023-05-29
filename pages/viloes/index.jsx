import React, { useEffect, useState } from "react";
import Pagina from "../../components/Pagina";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "@/services/data";
import { Row, Col, Card, Button } from "react-bootstrap";

const index = () => {
  const viloes = data.viloes;

  return (
    <Pagina titulo="Vilões">
      <Row className="mb-5">
        {viloes.map((item) => (
          <Col key={item.id} md={3} className="mb-4">
            <Card className="mb-3" style={{ width: 262 }}>
              <Card.Img
                variant="top"
                src={item.imagem}
                style={{ width: 259, height: 259 }}
              />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <Card.Text style={{ color: "grey" }}>{item.raca}</Card.Text>
              </Card.Body>
              <Button
                style={{ backgroundColor: "green" }}
                href={"/viloes/" + item.id}
              >
                Mais Informações
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
  );
};

export default index;