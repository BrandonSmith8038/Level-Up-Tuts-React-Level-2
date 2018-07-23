import styled from 'styled-components';
import { elevation, transition, black } from 'Utilities';

export const Card = styled.div`
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
