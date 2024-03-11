import { Button, Col, Container, Row } from "reactstrap";
import { ClientService } from "../services/clientService";
import { MessagingHelper } from "../models/helper/messagingHelper";
import { ClientDTO } from "../models/client/clientDTO";
import { useCallback, useEffect, useMemo, useState } from "react";
import ClientsTable from "../components/clientsTable";
import { Link } from "react-router-dom";

export default function Clients() {
  const [clients, setClients] = useState<ClientDTO[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const clientService = useMemo(() => new ClientService(), []);

  const getAll = useCallback(async () => {
    const resultGetAllClients: MessagingHelper<ClientDTO[]> =
      await clientService.GetAll();

    if (!resultGetAllClients.success) {
      setErrorMessage(resultGetAllClients.message);
      setSuccessMessage("");
      return;
    }

    setClients(resultGetAllClients.obj);
  }, [clientService]);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <Container fluid>
      <Row style={{ marginBottom: "1em" }}>
        <Col xl={12}>
          <h1>Clientes</h1>
        </Col>
      </Row>

      <Row className="mb-4">
        <Col>
          <Link to="/clients/add">
            <Button color="primary">Adicionar</Button>
          </Link>
        </Col>
      </Row>

      <Row className="d-flex justify-content-center">
        <Col lg={9} xl={8} xxl={6}>
          <ClientsTable clients={clients} />
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
