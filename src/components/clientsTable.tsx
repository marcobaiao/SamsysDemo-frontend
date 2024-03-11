import { Table } from "reactstrap";
import { Link } from "react-router-dom";
import { ClientDTO } from "../models/client/clientDTO";
import { formatDate } from "../utils/utils";

interface ClientsTableProps {
  clients: ClientDTO[];
}

export default function ClientsTable({ clients }: ClientsTableProps) {
  return (
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
            <td>{formatDate(client.dateOfBirth)}</td>
            <td>{client.phoneNumber}</td>
            <td>{client.isActive ? "Sim" : "Não"}</td>
            <td>
              <Link to={`/client/edit/${client.id}`}>Editar</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
