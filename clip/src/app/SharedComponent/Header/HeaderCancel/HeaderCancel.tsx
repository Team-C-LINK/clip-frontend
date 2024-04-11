import * as C from './HeaderCancel.style';
import cancel from '../../asset/image/cancel.svg';
import Image from 'next/image';

const HeaderCancel = () => {
  const routing = () => {
    window.location.href = '';
  };

  return (
    <>
      <C.header>
        <C.prev onClick={routing} src={cancel.src}></C.prev>
      </C.header>
    </>
  );
};

export default HeaderCancel;
