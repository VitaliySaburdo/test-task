import { Table, Head, ColumnHead, TableRow } from "./Tables.styled";

export const Tables = () => {
  return (
    <>
      <Table>
        <Head>
          <TableRow>
            <ColumnHead>Type</ColumnHead>
            <ColumnHead>Amount</ColumnHead>
            <ColumnHead>Currency</ColumnHead>
          </TableRow>
        </Head>
      </Table>
    </>
  );
};
