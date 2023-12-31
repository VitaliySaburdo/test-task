import styled from 'styled-components';

export const Table = styled.table`
  margin: 0 auto;
  width: 600px;
  border: 1px solid grey;
  margin-top: 40px;
  margin-bottom: 40px;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  height: 40px;
  background-color: #b0afaf;
`;

export const ColumnHead = styled.th`
  height: 30px;
  min-width: 200px;
  text-align: center;
  border: 1px solid black;
`;

export const TableRow = styled.tr`
  height: 30px;
`;

export const Columns = styled.td`
  width: 100vh;
  height: 30px;
  text-align: center;
  border: 1px solid grey;
`;

export const OptionWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 5px;
`
export const AddBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
`