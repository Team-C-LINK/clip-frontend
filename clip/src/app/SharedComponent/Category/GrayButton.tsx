import styled from 'styled-components';

const Text_wrap = styled.span`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: #07a320;

  width: fit-content;
  height: 2.2rem;
  padding: 0px 4px;

  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.SemiBold.B4};
  background-color: rgba(108, 108, 108, 0.08);
  border-radius: 0.4rem;
  letter-spacing: 0.03em;
  color: #6c6c6c;
`;

const GrayButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Text_wrap>{children}</Text_wrap>
    </>
  );
};

export default GrayButton;
