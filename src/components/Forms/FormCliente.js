import { useState } from "react";
import Swal from "sweetalert2";
import { createCliente } from "../../services/ClientesService";
import { ButtonSubmit, Column, Container, Form } from "./FormClienteElements";

const formVacio = {
  ruc: "",
  nombre: "",
  direccion: "",
  regimen: "",
  email: "",
  telefono: "",
  estado: "",
};

export const FormCliente = () => {
  const [form, setForm] = useState(formVacio);

  const handleChange = (e) => {
    const valor = e.target.value;
    setForm({
      ...form,
      [e.target.name]: valor,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Are you sure?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        createCliente(form).then((data) => {
          //   console.log(data._id);
          //   if (data.cliente.id) {
          setForm(formVacio);
          Swal.fire({
            title: "Successful",
            text: "Customer created successfully",
            icon: "success",
            // timer: 3500,
          });
          //   window.location.href = "/admin/clientes";
          //   } else {
          //     if (data.error) {
          //       Swal.fire({
          //         icon: "error",
          //         title: "Oops...",
          //         text: "Something went wrong!",
          //         timer: 3500,
          //       });
          //     }
          //   }
        });
      }
    });
  };

  return (
    <Container>
      <Column>
        <Form onSubmit={handleSubmit}>
          <div className="container">
            <input
              name="ruc"
              type="number"
              placeholder="Ruc"
              className="container__input"
              onChange={handleChange}
              value={form.ruc}
            />
            <label className="container__label">Ruc</label>
          </div>
          <div className="container">
            <input
              name="nombre"
              type="text"
              placeholder="Nombres y Apellidos/Razon Social"
              className="container__input"
              onChange={handleChange}
              value={form.nombre}
            />
            <label className="container__label">
              Nombres y Apellidos o Razon Social
            </label>
          </div>
          <div className="container">
            <input
              name="direccion"
              type="text"
              placeholder="Dirección Fiscal"
              className="container__input"
              onChange={handleChange}
              value={form.direccion}
            />
            <label className="container__label">Dirección Fiscal</label>
          </div>
          <div className="container">
            <select
              name="regimen"
              className="container__input"
              onChange={handleChange}
            >
              <option value="">Selecciona Régimen</option>
              <option value="Rus">Rus</option>
              <option value="Especial">Especial</option>
              <option value="Mype Tributario">Mype Tributario</option>
              <option value="Régimen general">Régimen General</option>
            </select>
            <label className="container__label">Régimen Tributario</label>
          </div>
          <div className="container">
            <input
              name="email"
              type="email"
              placeholder="Correo Electrónico"
              className="container__input"
              onChange={handleChange}
              value={form.email}
            />
            <label className="container__label">Correo Electrónico</label>
          </div>
          <div className="container">
            <input
              name="telefono"
              type="text"
              placeholder="Teléfono"
              className="container__input"
              onChange={handleChange}
              value={form.telefono}
            />
            <label className="container__label">Teléfono</label>
          </div>
          <div className="container">
            <select
              name="estado"
              className="container__input"
              onChange={handleChange}
            >
              <option value="">Selecciona Estado</option>
              <option value="Activo">Activo</option>
              <option value="Suspension">Suspension</option>
              <option value="Baja">Baja</option>
            </select>
            <label className="container__label">Estado</label>
          </div>
          <ButtonSubmit type="submit" className="btn mt-4 p-3">
            Registrar
          </ButtonSubmit>
        </Form>
      </Column>
    </Container>
  );
};
