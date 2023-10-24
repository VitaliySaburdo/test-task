import { useEffect } from "react";
import { useAppDispatch } from "../hooks/reduxHook";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { Tables } from "../components/Tables/Tables";
import { getAllUsers } from "../redux/users/userOperations";

export const TablesPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <Tables />
        </Container>
      </Section>
    </>
  );
};
