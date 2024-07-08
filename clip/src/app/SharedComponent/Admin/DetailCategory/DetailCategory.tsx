import styled from 'styled-components';
import arrow_black from '../../asset/image/arrow_right_black.svg';
import Image from 'next/image';

interface DetailCategoryProps {
  category?: string;
  detailCategory?: string;
}

const DetailCategory: React.FC<DetailCategoryProps> = ({
  category,
  detailCategory,
}) => {
  return (
    <Wrap>
      {category}
      &nbsp; &nbsp; &nbsp; &nbsp;
      {detailCategory}
    </Wrap>
  );
};

const Wrap = styled.div`
  position: relative;
  width: 100%;
  height: 5.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-family: 'Pretendard';
  ${(props) => props.theme.FONT.Header.H4};
`;

export default DetailCategory;
