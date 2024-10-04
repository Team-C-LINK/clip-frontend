'use client';

import * as C from './Footer.style';

const Footer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <C.Footer>{children}</C.Footer>
    </>
  );
};

export default Footer;
