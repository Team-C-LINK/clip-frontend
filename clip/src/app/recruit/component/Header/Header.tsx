import * as C from './Hedaer.style';

const Header = ({ text, route }: { text: string; route: string }) => {
  const routing = () => {
    window.location.href = route;
  };

  return (
    <>
      <C.header>ㅎㅇ 난헤더임</C.header>
    </>
  );
};

export default Header;
