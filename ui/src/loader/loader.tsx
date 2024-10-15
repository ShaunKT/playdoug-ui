import styled from 'styled-components';
import { Badge } from 'playdough-ui';

const StyledLoader = styled.div`
  color: pink;
`;

export function Loader() {
  return (
    <StyledLoader>
      <h1>Welcome to Loader!</h1>
      <Badge />
    </StyledLoader>
  );
}

export default Loader;
