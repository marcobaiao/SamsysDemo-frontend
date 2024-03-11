import { Col, Container, Row } from "reactstrap";
import { ClientService } from "../services/clientService";
import { MessagingHelper } from "../models/helper/messagingHelper";
import { ClientDTO } from "../models/client/clientDTO";
import { useCallback, useEffect, useMemo, useState } from "react";
import ClientsTable from "../components/clientsTable";

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
    <Container>
      <Row>
        <Col xl={12}>
          <h1>Clientes</h1>
        </Col>
      </Row>

      <Row style={{ marginTop: "2em" }}>
        <Col>
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
