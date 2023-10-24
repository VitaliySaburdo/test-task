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

export const Tables = () => {
  const [userList, setUserList] = useState(users);

  const handleDelete = (id: string) => {
    const updatedUserList = userList.filter((item) => item.id !== id);
    setUserList(updatedUserList);
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
                    <button type="button">Edit</button>
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
    </>
  );
};
