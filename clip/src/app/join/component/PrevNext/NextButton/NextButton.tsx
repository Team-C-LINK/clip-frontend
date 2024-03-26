import styled from 'styled-components';
import { useRouter } from 'next/navigation';

const NextBtn = styled.div`
  width: 45dvw;
  height: 4.4rem;
  display: flex;
  flex-direction: row;
  border-radius: 0.4rem;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 2.4rem;
  justify-content: center;
  align-items: center;
  background: #1d2939;
  color: white;
`;

const NextButton = ({
  children,
  targetAddress,
}: {
  children: React.ReactNode;
  targetAddress: string;
}) => {
  const router = useRouter();

  return (
    <>
      <NextBtn onClick={() => router.push(targetAddress)}>{children}</NextBtn>
    </>
  );
};

export default NextButton;
