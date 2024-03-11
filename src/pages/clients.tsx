import { Col, Container, Row, Table } from "reactstrap";
import { ClientService } from "../services/clientService";
import { MessagingHelper } from "../models/helper/messagingHelper";
import { ClientDTO } from "../models/client/clientDTO";
import { useEffect, useState } from "react";

export default function Clients() {
  const [clients, setClients] = useState<ClientDTO[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const clientService = new ClientService();

  const getAll = async () => {
    const resultGetAllClients: MessagingHelper<ClientDTO[]> =
      await clientService.GetAll();

    if (!resultGetAllClients.success) {
      setErrorMessage(resultGetAllClients.message);
      setSuccessMessage("");
      return;
    }

    setClients(resultGetAllClients.obj);
  };

  useEffect(() => {
    getAll();
  }, []);

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
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.name}</td>
                  <td>{client.dateOfBirth}</td>
                  <td>{client.phoneNumber}</td>
                  <td>{client.isActive}</td>
                  <td>Editar</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>

      {errorMessage && (
        <Row>
          <Col xl={12} className="error">
            {errorMessage}
          </Col>
        </Row>
      )}

      {successMessage && (
        <Row>
          <Col xl={12} className="success">
            {successMessage}
          </Col>
        </Row>
      )}
    </Container>
  );
}
