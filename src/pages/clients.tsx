import { Col, Container, Row, Table } from "reactstrap";
import { ClientService } from "../services/clientService";

export default function Clients() {
  const clientService = new ClientService();

  const getClients = async () => {
    let resultGetClients: MessagingHelper<ClientDTO | null> =
      await clientService.Get(Number(id));

    if (resultGetClient.success == false) {
      setErrorMessage(resultGetClient.message);
      setSuccessMessage("");
      return;
    }

    var client: ClientEditDTO = {
      name: resultGetClient.obj!.name,
      phoneNumber: resultGetClient.obj!.phoneNumber,
      concurrencyToken: resultGetClient.obj!.concurrencyToken,
    };

    setErrorMessage("");
    setClientToUpdate(client);
    setIsActive(resultGetClient.obj!.isActive);
  };

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
