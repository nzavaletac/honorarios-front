import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Data from "./data.json";

export const ListClient = () => {
  const [first, setFirst] = useState(0);

  return (
    <>
      <div>
        <DataTable
          value={Data.data}
          paginator
          rows={10}
          responsiveLayout="scroll"
          first={first}
          onPage={(e) => setFirst(e.first)}
          style={{}}
        >
          <Column
            field="code"
            header="Code"
            style={{
              width: "200px",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            style={{
              width: "200px",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="category"
            header="Category"
            style={{
              width: "200px",
              height: "50px",
              borderBottom: "1px solid gray",
              textAlign: "center",
            }}
            headerStyle={{ backgroundColor: "GrayText", textAlign: "center" }}
          ></Column>
          <Column
            field="quantity"
            header="Quantity"
            style={{
              width: "200px",
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
