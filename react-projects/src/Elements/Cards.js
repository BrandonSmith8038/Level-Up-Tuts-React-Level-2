import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
  max-width: 320px;
  margin: 0 auto;
  background: white;
  border-radius: 5px;
  ${elevation[4]};
  padding: 25px;
  color: ${black}
    ${transition({
      property: 'box-shadow',
    })};
  &:hover {
    ${elevation[5]};
  }
`;
