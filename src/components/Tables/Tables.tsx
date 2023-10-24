import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import { selectUsers } from "../../redux/users/userSelectors";
import { deleteUser } from "../../redux/users/userOperations";
import {
  Table,
  Head,
  ColumnHead,
  TableRow,
  Columns,
  OptionWrapper,
  AddBtn,
} from "./Tables.styled";
import { Modal } from "../Modal/Modal";
import { AddForm } from "../AddForm/AddForm";

interface TablesProps {
  nextPage: () => void;
  previousPage: () => void;
}

export const Tables: React.FC<TablesProps> = ({ nextPage, previousPage }) => {
  const [isOpenAddModal, setIsOpenAddModal] = useState(false);

  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const handleAddUser = () => {
    setIsOpenAddModal(true);
  };

  const handleDelete = (id: string) => {
    dispatch(deleteUser(id));
  };

  return (
    <>
      <Table>
        <Head>
          <TableRow>
            <ColumnHead>Name</ColumnHead>
            <ColumnHead>Email</ColumnHead>
            <ColumnHead>Birthday date</ColumnHead>
            <ColumnHead>Phone number</ColumnHead>
            <ColumnHead>Address</ColumnHead>
            <ColumnHead>Options</ColumnHead>
          </TableRow>
        </Head>
        <tbody>
          {users.map(
            ({ id, name, email, birthday_date, phone_number, address }) => (
              <tr key={id}>
                <Columns>{name}</Columns>
                <Columns>{email}</Columns>
                <Columns>{birthday_date}</Columns>
                <Columns>{phone_number}</Columns>
                <Columns>{address}</Columns>
                <Columns>
                  <OptionWrapper>
                    <button
                      type="button"
                      onClick={() => {
                        handleDelete(id);
                      }}
                    >
                      Delete
                    </button>
                  </OptionWrapper>
                </Columns>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <button type="button" onClick={previousPage}>
        Prev
      </button>
      <button type="button" onClick={nextPage}>
        Next
      </button>
      <AddBtn type="button" onClick={handleAddUser}>
        Add user
      </AddBtn>
      {isOpenAddModal && (
        <Modal onClick={() => setIsOpenAddModal(false)}>
          <AddForm />
        </Modal>
      )}
    </>
  );
};
