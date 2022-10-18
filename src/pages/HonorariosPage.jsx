import { Clientes } from "../components/Clientes/Clientes";
import { Honorarios } from "../components/Honorarios/Honorarios";
import { Sidebar } from "../components/Sidebar/Sidebar";

export const HonorariosPage = () => {
  return (
    <div>
      <Honorarios />
      <Sidebar />
      <Clientes />
    </div>
  );
};
