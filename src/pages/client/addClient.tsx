import { Col, Container, Row } from "reactstrap";

export default function AddClient() {
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1>Adicionar Cliente</h1>
        </Col>
      </Row>

      <div style={{ width: "20%", marginTop: "2em", display: "inline-block" }}>
        <Row>
          <Col xl={6} style={{ textAlign: "right" }}>
            <label>Nome: </label>
          </Col>
          <Col xl={6}>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col xl={6} style={{ textAlign: "right" }}>
            <label>Contacto: </label>
          </Col>
          <Col xl={6}>
            <input type="text" />
          </Col>
        </Row>

        <Row>
          <Col xl={6} style={{ textAlign: "right" }}>
            <label>Data de nascimento: </label>
          </Col>
          <Col xl={6}>
            <input type="date" />
          </Col>
        </Row>

        <Row>
          <Col xl={12}>
            <button className="btnUpdateClient">Adicionar</button>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
