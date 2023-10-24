import { useState } from "react";
import {
  Table,
  Head,
  ColumnHead,
  TableRow,
  Columns,
  OptionWrapper,
} from "./Tables.styled";
import { users } from "../../db/usersDb.js";
import { Modal } from "../Modal/Modal";
import { UserForm } from "../UserForm/UserForm";
// import {UserProps} from '../App/App.types'

export const Tables = () => {
  const [userList, setUserList] = useState(users);
  const [editUser, setEditingUser] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (id: string) => {
    const updatedUserList = userList.filter((item) => item.id !== id);
    setUserList(updatedUserList);
  };

  const handleEdit = (id: string) => {
    const userToEdit = userList.find((user) => user.id === id);
    if (userToEdit) {
      setEditingUser(userToEdit);
      setIsOpen(true);
    }
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
          {userList.map(
            ({ id, name, email, birthday_date, phone_number, address }) => (
              <tr key={id}>
                <Columns>{name}</Columns>
                <Columns>{email}</Columns>
                <Columns>{birthday_date}</Columns>
                <Columns>{phone_number}</Columns>
                <Columns>{address}</Columns>
                <Columns>
                  <OptionWrapper>
                    <button type="button" onClick={() => handleEdit(id)}>
                      Edit
                    </button>
                    <button type="button">Replace</button>
                    <button type="button" onClick={() => handleDelete(id)}>
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
