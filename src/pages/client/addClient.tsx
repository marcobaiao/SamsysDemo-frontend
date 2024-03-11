import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { ClientService } from "../../services/clientService";
import { ClientDTO } from "../../models/client/clientDTO";
import { MouseEvent, useState } from "react";
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

  const create = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

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

  const handleGoBack = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    navigate(-1);
  };

  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1>Adicionar Cliente</h1>
        </Col>
      </Row>

      <Row className="mt-4 d-flex justify-content-center">
        <Col sm={12} md={10} lg={8} xl={6}>
          <Form>
            <FormGroup row>
              <Label xs={5}>Nome: </Label>

              <Col xs={7}>
                <Input
                  type="text"
                  value={clientToAdd?.name ?? ""}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setClientToAdd({ ...clientToAdd, name: e.target.value })
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xs={5}>Contacto: </Label>
              <Col xs={7}>
                <Input
                  type="text"
                  value={clientToAdd.phoneNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setClientToAdd({
                      ...clientToAdd,
                      phoneNumber: e.target.value,
                    })
                  }
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label xs={5}>Data de nascimento: </Label>
              <Col xs={7}>
                <Input
                  type="date"
                  value={clientToAdd.dateOfBirth}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setClientToAdd({
                      ...clientToAdd,
                      dateOfBirth: e.target.value,
                    })
                  }
                />
              </Col>
            </FormGroup>

            <Row className="d-flex justify-content-center">
              <Col md={8} lg={6}>
                <button
                  className="btnUpdateClient bg-danger text-white"
                  onClick={handleGoBack}
                >
                  Voltar
                </button>
              </Col>
              <Col md={8} lg={6}>
                <button
                  className="btnUpdateClient bg-primary text-white"
                  onClick={create}
                >
                  Adicionar
                </button>
              </Col>
            </Row>
          </Form>
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
