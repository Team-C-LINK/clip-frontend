import styled from 'styled-components';

const MiddleImage = styled.div`
  position: relative;
  width: 31.8rem;
  height: 27.9rem;
  top: 10rem;
  background: url(${(props) => props.src});
  background-size: cover;
`;

export default MiddleImage;
