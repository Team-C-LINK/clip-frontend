import * as C from './C.style';

const TopText = ({ top, bottom }: { top: string; bottom: string }) => {
  return (
    <>
      <C.TitleFrame>
        <C.TitleTopText>{top}</C.TitleTopText>
        <C.TitleBottomText>{bottom}</C.TitleBottomText>
      </C.TitleFrame>
    </>
  );
};

export default TopText;
