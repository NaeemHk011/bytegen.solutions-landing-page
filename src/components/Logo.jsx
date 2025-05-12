'use client'
import React from 'react';
import styled from 'styled-components';

const Logo = () => {
    return (
        <StyledWrapper>
            <div className="loader" />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;

  .loader {
    position: relative;
    width: 32px;
    height: 32px;
    transform: rotate(165deg);
  }

  .loader:before, .loader:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    transform: translate(-50%, -50%);
  }

  .loader:before {
    animation: before8 2s infinite;
  }

  .loader:after {
    animation: after6 2s infinite;
  }

  @keyframes before8 {
    0% {
      width: 8px;
      box-shadow: 16px -8px rgba(225, 20, 98, 0.75), -16px 8px rgba(111, 202, 220, 0.75);
    }
    35% {
      width: 32px;
      box-shadow: 0 -8px rgba(225, 20, 98, 0.75), 0 8px rgba(111, 202, 220, 0.75);
    }
    70% {
      width: 8px;
      box-shadow: -16px -8px rgba(225, 20, 98, 0.75), 16px 8px rgba(111, 202, 220, 0.75);
    }
    100% {
      box-shadow: 16px -8px rgba(225, 20, 98, 0.75), -16px 8px rgba(111, 202, 220, 0.75);
    }
  }

  @keyframes after6 {
    0% {
      height: 8px;
      box-shadow: 8px 16px rgba(61, 184, 143, 0.75), -8px -16px rgba(233, 169, 32, 0.75);
    }
    35% {
      height: 32px;
      box-shadow: 8px 0 rgba(61, 184, 143, 0.75), -8px 0 rgba(233, 169, 32, 0.75);
    }
    70% {
      height: 8px;
      box-shadow: 8px -16px rgba(61, 184, 143, 0.75), -8px 16px rgba(233, 169, 32, 0.75);
    }
    100% {
      box-shadow: 8px 16px rgba(61, 184, 143, 0.75), -8px -16px rgba(233, 169, 32, 0.75);
    }
  }
`;

export default Logo;
