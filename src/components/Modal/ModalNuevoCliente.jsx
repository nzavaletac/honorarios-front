import { Modal } from "react-bootstrap";
import { FormCliente } from "../Forms/FormCliente";

export const ModalNuevoCliente = ({ show, handleClose }) => {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-center">Add New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormCliente />
        </Modal.Body>
      </Modal>
    </>
  );
};
