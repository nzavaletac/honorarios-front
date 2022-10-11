import {
  Container,
  FormContent,
  FormWrap,
  ImgBg,
  LoginBg,
  Form,
  FormTitle,
  IconFormContainer,
  IconForm,
} from "./LoginElements";
import BgImage from "../../assets/BgImage.jpg";
import Logo from "../../assets/Logo.jpg";
import "./Login.css";

export const Login = () => {
  return (
    <>
      <Container>
        <LoginBg>
          <ImgBg src={BgImage} />
        </LoginBg>
        <FormWrap>
          <FormContent>
            <Form>
              <IconFormContainer>
                <IconForm src={Logo} />
              </IconFormContainer>
              <FormTitle>Inicia sesión en tu cuenta</FormTitle>
              <div className="container">
                <input
                  placeholder="Correo"
                  className="container__input"
                  type="email"
                  name="email"
                  //   onChange={(e) => setEmail(e.target.value)}
                />
                <label className="container__label">Correo</label>
              </div>
              <div className="container">
                <input
                  placeholder="Contraseña"
                  className="container__input"
                  type="password"
                  name="password"
                  //   onChange={(e) => setPassword(e.target.value)}
                />
                <label className="container__label">Contraseña</label>
              </div>
              <button className="learn-more" type="submit">
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Iniciar Sesion</span>
              </button>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
