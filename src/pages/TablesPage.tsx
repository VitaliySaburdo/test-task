import { useState, useEffect } from "react";
import { useAppDispatch } from "../hooks/reduxHook";
import { Container } from "../components/Container/Container";
import { Section } from "../components/Section/Section";
import { Tables } from "../components/Tables/Tables";
import { getAllUsers } from "../redux/users/userOperations";


export const TablesPage = () => {
  const [page, setPage] = useState<number>(1);
  const dispatch = useAppDispatch();
  
 useEffect(() => {
    dispatch(getAllUsers(page));
 }, [dispatch, page]);
  
    const onNextPage = () => {
    setPage((prevState) => prevState + 1);
  };
  const onPreviousPage = () => {
    if (page > 1) {
      setPage((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <Section>
        <Container>
          <Tables
          previousPage={onPreviousPage}
          nextPage={onNextPage}/>
        </Container>
      </Section>
    </>
  );
};
