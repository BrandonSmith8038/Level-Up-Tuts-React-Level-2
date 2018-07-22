import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  ${elevation[4]};
  padding: 25px;
  color: ${black}
    ${transition({
      ease: 'ease-in',
      length: '0.2s',
    })};
  &:hover {
    ${elevation[5]};
  }
`;
