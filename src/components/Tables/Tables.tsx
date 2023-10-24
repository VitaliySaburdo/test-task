import { useState } from "react";
import {
  Table,
  Head,
  ColumnHead,
  TableRow,
  Columns,
  OptionWrapper,
} from "./Tables.styled";
import { Modal } from "../Modal/Modal";
import { UserForm } from "../UserForm/UserForm";
import { useAppSelector } from "../../hooks/reduxHook";
import { selectUsers } from "../../redux/users/userSelectors";
// import {users} from '../../db/usersDb'
// import {UserProps} from '../App/App.types'

export const Tables = () => {
  const [isOpen, setIsOpen] = useState(false);

  const users = useAppSelector(selectUsers);

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
                    <button type="button">
                      Edit
                    </button>
                    <button type="button">Replace</button>
                    <button type="button">
                      Delete
                    </button>
                  </OptionWrapper>
                </Columns>
              </tr>
            )
          )}
        </tbody>
      </Table>
      <button type="button">Add user</button>
      {isOpen && (
        <Modal onClick={() => setIsOpen(false)}>
          <UserForm />
        </Modal>
      )}
    </>
  );
};
