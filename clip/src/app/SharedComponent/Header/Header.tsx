import * as C from './Header.style';
import arrow from '../asset/image/arrow.svg';
import Image from 'next/image';

const Header = ({ text }: { text: string }) => {
  return (
    <>
      <C.header>
        <C.prev src={arrow.src}></C.prev>
        <C.header_title>{text}</C.header_title>
      </C.header>
    </>
  );
};

export default Header;
