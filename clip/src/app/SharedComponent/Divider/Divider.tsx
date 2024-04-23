import styled from 'styled-components';

type DividerType = {
  size: string;
};

const Divider = styled.div<DividerType>`
  width: ${(props) => props.size};
  height: 0.1rem;
  background: #d9d9d9;
`;
export default Divider;
