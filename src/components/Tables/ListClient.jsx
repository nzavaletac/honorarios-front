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
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="nombre"
            header="Nombres y Apellidos o Razon Social"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="planilla"
            header="Planilla"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="regimen"
            header="Régimen Tributario"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="email"
            header="Correo"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="telefono"
            header="Teléfono"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="estado"
            header="Estado"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="responsable"
            header="Responsable"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
          <Column
            field="honorarios"
            header="Honorarios"
            style={{
              width: "auto",
              height: "50px",
              padding: "5px",
              border: "1px solid gray",
              textAlign: "center",
              fontSize: "12px",
            }}
            headerStyle={{
              backgroundColor: "GrayText",
              textAlign: "center",
              fontSize: "17px",
              border: "1px solid white",
            }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
};
