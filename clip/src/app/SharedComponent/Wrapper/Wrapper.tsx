'use client';

import { Wrap } from './Wrapper.style';

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <Wrap>{children}</Wrap>;
};

export default Wrapper;
