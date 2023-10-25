import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { Pagination } from "@mui/material";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { Tables } from "../components/Tables/Tables";
import { getAllUsers } from "../redux/users/userOperations";
import { selectCount } from "../redux/users/userSelectors";

export const TablesPage = () => {
  const [item, setItem] = useState<number>(1);
  const dispatch = useAppDispatch();
  const usersOnPage = 10;

  const count = useAppSelector(selectCount);

  useEffect(() => {
    const offset = (item - 1) * usersOnPage;
    dispatch(getAllUsers(offset));
  }, [dispatch, item, count]);

  return (
    <>
      <Section>
        <Container>
          <Tables />
          <Pagination
            count={Math.ceil(count / usersOnPage)}
            page={item}
            onChange={(_, num) => setItem(num)}
          />
        </Container>
      </Section>
    </>
  );
};
