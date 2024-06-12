import styled from '@emotion/styled';
import React from 'react';

const StyledPackageBadges = styled.div`
  margin: 0 -5px;
  a {
    margin: 0 5px;
  }
`;

export const PackageBadges = () => {
  return (
    <StyledPackageBadges>
      <p>
        <a href="https://www.npmjs.com/package/react-pro-sidebar" rel="nofollow" target="_blank">
          <strong className='text-2xl primary'>Contribute on <div className='inline' /></strong>
          <img
            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
            alt="License"
            style={{height: '26px'}}
            className='inline'
          />
        </a>
      </p>
    </StyledPackageBadges>
  );
};
