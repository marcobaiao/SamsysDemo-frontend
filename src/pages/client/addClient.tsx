import { Col, Container, Row } from "reactstrap";
import { ClientService } from "../../services/clientService";
import { ClientDTO } from "../../models/client/clientDTO";
import { useState } from "react";
import { MessagingHelper } from "../../models/helper/messagingHelper";
import { useNavigate } from "react-router";

export default function AddClient() {
  const initialClientToAdd: ClientDTO | null = {
    name: "",
    phoneNumber: "",
    dateOfBirth: "",
    isActive: false,
    concurrencyToken: "",
  };

  const [clientToAdd, setClientToAdd] = useState<ClientDTO>(
    initialClientToAdd!
  );
  const [errorMessage, setErrorMessage] = useState<string>();
  const [successMessage, setSuccessMessage] = useState<string>();

  const navigate = useNavigate();

  const clientService = new ClientService();

  const create = async () => {
    const resultCreate: MessagingHelper<ClientDTO | null> =
      await clientService.Add(clientToAdd!);

    if (resultCreate.success == false) {
      setErrorMessage(resultCreate.message);
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Cliente adicionado com sucesso");
    setErrorMessage("");
    setClientToAdd(initialClientToAdd);
    navigate("/clients");
  };

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
            <input
              type="text"
              value={clientToAdd?.name ?? ""}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setClientToAdd({ ...clientToAdd, name: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row>
          <Col xl={6} style={{ textAlign: "right" }}>
            <label>Contacto: </label>
          </Col>
          <Col xl={6}>
            <input
              type="text"
              value={clientToAdd.phoneNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setClientToAdd({ ...clientToAdd, phoneNumber: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row>
          <Col xl={6} style={{ textAlign: "right" }}>
            <label>Data de nascimento: </label>
          </Col>
          <Col xl={6}>
            <input
              type="date"
              value={clientToAdd.dateOfBirth}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setClientToAdd({ ...clientToAdd, dateOfBirth: e.target.value })
              }
            />
          </Col>
        </Row>

        <Row>
          <Col xl={12}>
            <button className="btnUpdateClient" onClick={create}>
              Adicionar
            </button>
          </Col>
        </Row>
      </div>

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
