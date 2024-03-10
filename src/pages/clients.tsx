import { Col, Container, Row, Table } from "reactstrap";

export default function Clients() {
  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1>Clientes</h1>
        </Col>
      </Row>

      <Row style={{ marginTop: "2em" }}>
        <Col>
          <Table striped>
            <thead className="table-dark">
              <tr>
                <th>Nome</th>
                <th>Data de nascimento</th>
                <th>Número de telemóvel</th>
                <th>Ativo</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Marco Baião</td>
                <td>26-09-1998</td>
                <td>910258869</td>
                <td>Sim</td>
                <td>Editar</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}
