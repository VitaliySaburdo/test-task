import { Table, Head, ColumnHead, TableRow } from "./Tables.styled";

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
      </Table>
    </>
  );
};
