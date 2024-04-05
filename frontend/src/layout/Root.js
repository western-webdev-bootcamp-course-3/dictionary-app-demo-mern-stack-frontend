import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import SidebarHover from './SidebarHover';
import CollaseButton from './CollaseButton';

const Root = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div style={{ display: 'flex', flexDirection: 'row', minHeight: '100vh' }}>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <SidebarHoverWrapper style={isCollapsed ? {} : {display: 'block'}}>
        <SidebarHover setIsCollapsed={setIsCollapsed} />
      </SidebarHoverWrapper>
      <CollaseWrapper>
        <CollaseButton setIsCollapsed={setIsCollapsed} />
      </CollaseWrapper>
      <PageWrapper>
        <Outlet />
      </PageWrapper>
    </div>
  );
};

// Create a styled div element
const SidebarWrapper = styled.div`
  width: 20rem;

  // Use media query to hide sidebar on screens smaller than 992px
  @media (max-width: 992px) {
    display: none;
  }
`;

const SidebarHoverWrapper = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  width: 20rem;
`;

const CollaseWrapper = styled.div`
  display: none;

  @media (max-width: 992px) {
    width: 2rem;
    height: 2rem;
    display: block;
    padding-top: 2rem;
  }
`;

const PageWrapper = styled.div`
  flex: 1;
  padding: 4rem;
  max-height: 100vh;
  overflow-y: auto;
  width: calc(100vw - 20rem);

  @media (max-width: 1200px) {
    width: calc(100vw - 2rem);
    padding: 2rem 0.5rem 2rem 0.5rem;
  }
`;

export default Root;
