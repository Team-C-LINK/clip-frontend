import { PropsWithChildren, ReactNode } from 'react';
import * as C from './TableIndex.style';

const TableIndex = ({ children }: { children: ReactNode }) => {
  return <C.wrap>{children}</C.wrap>;
};

export default TableIndex;
