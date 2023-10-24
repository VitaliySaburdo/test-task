import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHook";
import {deleteUser} from '../../redux/users/userOperations'
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
import { UserForm } from "../UserForm/UserForm";

import { selectUsers } from "../../redux/users/userSelectors";
import { PaginatedItems } from "../Pagination/Pagination";

export const Tables = () => {
  const [isOpen, setIsOpen] = useState(false);

  const users = useAppSelector(selectUsers);
  const dispatch = useAppDispatch();

  const handleAddUser = () => {
    setIsOpen(true);
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
                    <button type="button">Edit</button>
                    <button type="button">Replace</button>
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
      <AddBtn type="button" onClick={handleAddUser}>
        Add user
      </AddBtn>
      <PaginatedItems itemsPerPage={10} />
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <UserForm />
        </Modal>
      )}
    </>
  );
};
