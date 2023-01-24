import styled from '@emotion/styled';

export const Table = styled.table`
  margin-right: auto;
  margin-left: auto;
  border-radius: 4px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;
export const TableHead = styled.thead`
  background-color: #59b1f5;
  color: white;
  text-transform: uppercase;
`;

export const TableHeadElement = styled.th`
  width: 250px;
  padding: 20px;
  font-size: 16px;
  line-height: 1.19;
`;
export const TableBody = styled.tbody`
  text-align: center;
`;
export const TableElements = styled.tr`
  color: #898686;
  background-color: white;
  :nth-of-type(2n) {
    background-color: #e2ebed;
  }
`;

export const OneTableElement = styled.td`
  padding: 20px;
  width: 100px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
`;
