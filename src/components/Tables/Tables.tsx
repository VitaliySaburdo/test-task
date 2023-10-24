import { Table, Head, ColumnHead, TableRow, Columns } from "./Tables.styled";
import { users } from "../../db/usersDb.js";

export const Tables = () => {
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
                </tr>
              )
            )}
          </tbody>
      </Table>
    </>
  );
};
