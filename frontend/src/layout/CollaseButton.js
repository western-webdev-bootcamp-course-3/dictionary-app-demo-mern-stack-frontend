import { CiMenuBurger } from 'react-icons/ci';

const CollaseButton = ({ setIsCollapsed }) => {
  return (
    <button
      style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
      onClick={() => setIsCollapsed(false)}
    >
      <CiMenuBurger size={30} />
    </button>
  );
};

export default CollaseButton;
