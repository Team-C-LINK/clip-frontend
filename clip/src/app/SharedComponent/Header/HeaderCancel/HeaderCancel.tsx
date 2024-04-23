import * as C from './HeaderCancel.style';
import cancel from '../../asset/image/cancel.svg';
import Image from 'next/image';

const HeaderCancel = ({ route, text }: { route: string; text: string }) => {
  const routing = () => {
    window.location.href = route;
  };

  return (
    <>
      <C.header>
        <C.prev onClick={routing} src={cancel.src}></C.prev>
        <C.header_title>{text}</C.header_title>
      </C.header>
    </>
  );
};

export default HeaderCancel;
