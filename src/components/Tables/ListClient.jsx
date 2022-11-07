import { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
export const ListClient = () => {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      baseURL: "http://localhost:8000",
      url: "/clientes",
    }).then(({ data }) => setCliente(data.clientes));
  }, []);

  return (
    <>
      <div>
        <DataTable
          value={cliente}
          paginator
          rows={10}
          responsiveLayout="scroll"
        >
          <Column
            field="ruc"
            header="Ruc"
            style={{
              minWidth: "100px",
              width: "auto",
              height: "50px",
              padding: "5px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
            }}
          ></Column>
          <Column
            field="nombre"
            header="Nombres y Apellidos o Razon Social"
            style={{
              minWidth: "100px",
              width: "auto",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="direccion"
            header="Direccion"
            style={{
              minWidth: "100px",
              width: "auto",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="regimen"
            header="Régimen Tributario"
            style={{
              minWidth: "100px",
              width: "auto",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="email"
            header="Correo"
            style={{
              minWidth: "100px",
              width: "auto",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="telefono"
            header="Teléfono"
            style={{
              minWidth: "100px",
              width: "auto",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="estado"
            header="Estado"
            style={{
              minWidth: "100px",
              width: "auto",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
};
