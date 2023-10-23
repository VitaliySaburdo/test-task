import { Container } from "../components/Container/Container";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { Section } from "../components/Section/Section";


export const LoginPage = () => {


  return (
    <>
      <Section>
        <Container>
          <LoginForm />
        </Container>
      </Section>
    </>
  );
};
