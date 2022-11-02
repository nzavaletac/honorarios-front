import { ButtonSubmit, Column, Container, Form } from "./FormClienteElements";

export const FormCliente = () => {
  return (
    <Container>
      <Column>
        <Form>
          <div className="container">
            <input
              name="ruc"
              type="text"
              placeholder="Ruc"
              className="container__input"
              // onChange={handleChange}
              // value={form.ruc}
            />
            <label className="container__label">Ruc</label>
          </div>
          <div className="container">
            <input
              name="name"
              type="text"
              placeholder="Nombres y Apellidos/Razon Social"
              className="container__input"
              // onChange={handleChange}
              // value={form.name}
            />
            <label className="container__label">
              Nombres y Apellidos o Razon Social
            </label>
          </div>
          <div className="container">
            <input
              name="address"
              type="text"
              placeholder="Dirección Fiscal"
              className="container__input"
              // onChange={handleChange}
              // value={form.address}
            />
            <label className="container__label">Dirección Fiscal</label>
          </div>
          <div className="container">
            <input
              name="regime"
              type="text"
              placeholder="Régimen Tributario"
              className="container__input"
              // onChange={handleChange}
              // value={form.regimen}
            />
            <label className="container__label">Régimen Tributario</label>
          </div>
          <div className="container">
            <input
              name="email"
              type="email"
              placeholder="Correo Electrónico"
              className="container__input"
              // onChange={handleChange}
              // value={form.email}
            />
            <label className="container__label">Correo Electrónico</label>
          </div>
          <div className="container">
            <input
              name="phone"
              type="text"
              placeholder="Teléfono"
              className="container__input"
              // onChange={handleChange}
              // value={form.phone}
            />
            <label className="container__label">Teléfono</label>
          </div>
          <div className="container">
            <input
              name="state"
              type="text"
              placeholder="Estado Cliente"
              className="container__input"
              // onChange={handleChange}
              // value={form.state}
            />
            <label className="container__label">Estado</label>
          </div>
          <ButtonSubmit className="btn mt-4 p-3">Registrar</ButtonSubmit>
        </Form>
      </Column>
    </Container>
  );
};
