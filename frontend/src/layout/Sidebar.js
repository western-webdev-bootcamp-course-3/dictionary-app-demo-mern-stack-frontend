import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { color } from 'constant/Color';

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

const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <Header>
        <h1>My dictionary</h1>
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
    </>
  );
};

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border-bottom: 1px solid ${color.tertiaryText};
  justify-content: space-between;

  h1 {
    font-size: 1rem;
    padding: 1rem 0;
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

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin: 1rem 0;
  }

  .active i {
    color: inherit;
  }

  a {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 8px;
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    background: ${color.primaryBackground};
  }

  a.active {
    background: ${color.accent};
    color: white;
  }
`;

export default Sidebar;
