import styled from 'styled-components';

const StyledLoader = styled.div`
  color: pink;
`;

export function Loader() {
  return (
    <StyledLoader>
      <h1>Welcome to Loader!</h1>
    </StyledLoader>
  );
}

export default Loader;
