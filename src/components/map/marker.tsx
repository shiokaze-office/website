import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  z-index: 1;
`

const BouncedPin = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50% 50% 50% 0;
  background: #cec0d9;
  position: absolute;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -20px 0 0 -13px;
  cursor: pointer;

  /*
  &:after {
    content: "";
    width: 30px;
    height: 30px;
    margin: 8px 0 0 8px;
    background: #e6e6e6;
    position: absolute;
    border-radius: 50%;
    border-radius: 50% 50% 50% 0;
    z:index: -2;
  }
  */

  animation-name: bounce;
  animation-fill-mode: both;
  animation-duration: 1s;
  @keyframes bounce {
    0% {
      opacity: 0;
      transform: translateY(-2000px) rotate(-45deg);
    }
    60% {
      opacity: 1;
      transform: translateY(30px) rotate(-45deg);
    }
    80% {
      transform: translateY(-10px) rotate(-45deg);
    }
    100% {
      transform: translateY(0) rotate(-45deg);
    }
  }
`

const Pulse = styled.div`
  background: #d6d4d4;
  background: #e6e0ed;
  border-radius: 50%;
  height: 14px;
  width: 14px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: 11px 0px 0px -5px;
  transform: rotateX(55deg);
  z-index: -2;
  &:after {
    content: '';
    border-radius: 50%;
    height: 40px;
    width: 40px;
    position: absolute;
    margin: -13px 0 0 -20px;
    animation: pulsate 1s ease-out;
    animation-iteration-count: infinite;
    opacity: 0;
    box-shadow: 0 0 1px 2px #cec0d9;
    animation-delay: 1.1s;
  }
  @keyframes pulsate {
    0% {
      transform: scale(0.1, 0.1);
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      transform: scale(1.2, 1.2);
      opacity: 0;
    }
  }
`

const Component = props => (
  <Wrapper>
    <BouncedPin alt={props.text} />
    <Pulse />
  </Wrapper>
)

Component.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Component
