import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'constant/Color';
import { IoIosClose } from 'react-icons/io';

const navList = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Word list',
    path: '/word-list',
  },
];

const SidebarHover = ({ setIsCollapsed }) => {
  const location = useLocation();

  return (
    <Wrapper>
      <Header>
        <h1>My dictionary</h1>

        <IoIosClose
          size={25}
          style={{ cursor: 'pointer' }}
          onClick={() => setIsCollapsed(true)}
        />
      </Header>
      <Navigation>
        <ul>
          {navList.map((navItem, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={navItem.path}
                  className={() =>
                    location.pathname === navItem.path ? 'active' : ''
                  }
                >
                  {navItem.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </Navigation>
    </Wrapper>
  );
};

// Create a styled div element
const Wrapper = styled.div`
  background-color: ${color.secondaryBackground};
  border-right: solid 1px ${color.tertiaryText};
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${color.tertiaryText};
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    line-height: 1;
  }

  h1::before {
    content: url('images/logo.svg');
    margin-right: 0.5rem;
    position: relative;
    top: 1px;
  }
`;

const Navigation = styled.nav`
  flex: 1;
  overflow: auto;
  padding-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;

  a span {
    float: right;
    color: ${color.primaryText};
  }

  a.active span {
    color: inherit;
  }

  .active i {
    color: inherit;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;

    white-space: pre;
    padding: 0.5rem;
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
    gap: 1rem;
  }

  a:hover {
    background: ${color.primaryBackground};
  }

  a.active {
    background: ${color.accent};
    color: white;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin: 1rem 0;
  }
`;

export default SidebarHover;
