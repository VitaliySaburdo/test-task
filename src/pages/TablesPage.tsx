import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHook";
import { Pagination } from "@mui/material";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { Tables } from "../components/Tables/Tables";
import { getAllUsers } from "../redux/users/userOperations";
import { selectCount } from "../redux/users/userSelectors";

export const TablesPage = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);

  useEffect(() => {
    dispatch(getAllUsers(page));
  }, [dispatch, page, count]);

  return (
    <>
      <Section>
        <Container>
          <Tables />
          <Pagination
            count={count}
            page={page}
            onChange={(_, num) => setPage(num)}
          />
        </Container>
      </Section>
    </>
  );
};
