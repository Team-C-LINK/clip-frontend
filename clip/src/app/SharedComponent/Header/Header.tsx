import * as C from './Header.style';
import arrow from '../asset/image/arrow.svg';
import Image from 'next/image';

const Header = ({ text, route }: { text: string; route: string }) => {
  const routing = () => {
    window.location.href = route;
  };

  return (
    <>
      <C.header>
        <C.prev onClick={routing} src={arrow.src}></C.prev>
        <C.header_title>{text}</C.header_title>
      </C.header>
    </>
  );
};

export default Header;
