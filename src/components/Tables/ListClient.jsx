import { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import DataTable from "react-data-table-component";

export const ListClient = () => {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:8000",
      url: "/clientes",
    }).then(({ data }) => setCliente(data.clientes));
  }, []);

  const customStyles = {
    rows: {
      style: {
        textAlign: "center",
        fontSize: "13px",
      },
    },
    headCells: {
      style: {
        backgroundColor: "#35353f",
        color: "#fff",
        fontSize: "15px",
      },
    },
    cells: {
      style: {},
    },
  };

  const columns = [
    {
      name: "Ruc",
      selector: (cliente) => cliente.ruc,
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: "Razon Social",
      selector: (cliente) => cliente.nombre,
      sortable: true,
      center: true,
      compact: true,
      sortServer: true,
      wrap: true,
      minWidth: "300px",
    },
    {
      name: "Planilla",
      selector: (cliente) => cliente.planilla,
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: "Régimen",
      selector: (cliente) => cliente.regimen,
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: "Correo",
      selector: (cliente) => cliente.email,
      sortable: true,
      center: true,
      compact: true,
      wrap: true,
      minWidth: "250px",
    },
    {
      name: "Teléfono",
      selector: (cliente) => cliente.telefono,
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: "Estado",
      selector: (cliente) => cliente.estado,
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: "Resp.",
      selector: (cliente) => cliente.responsable,
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: "Hono.",
      selector: (cliente) => cliente.honorarios,
      sortable: true,
      center: true,
      compact: true,
    },
    {
      name: "Acciones",
      selector: () => {
        return (
          <>
            <button style={{ marginRight: "10px" }}>
              <FaEdit />
            </button>
            <button style={{ marginLeft: "10px" }}>
              <AiFillDelete />
            </button>
          </>
        );
      },
      center: true,
      compact: true,
    },
  ];

  return (
    <div>
      <DataTable
        title="Clientes"
        columns={columns}
        data={cliente}
        selectableRows
        fixedHeader
        fixedHeaderScrollHeight="700px"
        pagination
        paginationPerPage="15"
        // theme="dark"
        striped
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
      />

      {/* <Table striped bordered hover>
        <thead
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: "15px",
            backgroundColor: "#35353f",
            color: "#fff",
          }}
        >
          <tr>
            <th>#</th>
            <th>Ruc</th>
            <th>Razon Social</th>
            <th>¿Planilla?</th>
            <th>Correo</th>
            <th>Teléfono</th>
            <th>Estado</th>
            <th>Resp.</th>
            <th>Hono.</th>
            <th colSpan={2}>Acciones</th>
          </tr>
        </thead>
        <tbody
          style={{
            textAlign: "center",
            justifyContent: "center",
            fontSize: "13px",
          }}
        >
          {cliente.map((customer) => {
            return (
              <tr>
                <td>{}</td>
                <td>{customer.ruc}</td>
                <td>{customer.nombre}</td>
                <td>{customer.planilla}</td>
                <td>{customer.email}</td>
                <td>{customer.telefono}</td>
                <td>{customer.estado}</td>
                <td>{customer.responsable}</td>
                <td>{customer.honorarios}</td>
                <td>
                  <button>
                    <FaEdit width="20px" color="" />
                  </button>
                </td>
                <td>
                  <button>
                    <AiFillDelete width="20px" color="" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>  */}
    </div>
  );
};
