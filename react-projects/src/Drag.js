import React, { Component } from 'react';
import { Gesture } from 'react-with-gesture';
import { Spring, animated, interpolate } from 'react-spring';
import { Card } from 'Elements';
import styled from 'styled-components';

const AnimCard = Card.withComponent(animated.div);

const DragCard = AnimCard.extend`
  height: 300px;
`;

const CardContainer = styled.div`
  position: relative;
  background: #ccc;
  max-width: 320px;
  margin: 50px auto;
  border-radius: 5px;
`;
export default class Drag extends Component {
  render() {
    return (
      <Gesture>
        {({ down, xDelta }) => (
          <Spring
            native
            to={{
              x: down ? xDelta : 0,
            }}
            immediate={name => down && name === 'x'}
          >
            {({ x }) => (
              <CardContainer>
                <DragCard
                  style={{
                    transform: interpolate(
                      [
                        x,
                        x.interpolate({
                          range: [-300, 300],
                          output: [-45, 45],
                          extrapolate: 'clamp',
                        }),
                      ],
                      (x, rotate) => `translateX(${x}px) rotate(${rotate}deg)`
                    ),
                  }}
                >
                  <h1>Drag Me</h1>
                </DragCard>
              </CardContainer>
            )}
          </Spring>
        )}
      </Gesture>
    );
  }
}
