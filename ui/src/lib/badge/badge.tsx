import styled from 'styled-components';

const StyledBadge = styled.div`
  color: pink;
`;

export function Badge() {
  return (
    <StyledBadge>
      <h1>Welcome to Badge!</h1>
    </StyledBadge>
  );
}

export default Badge;
