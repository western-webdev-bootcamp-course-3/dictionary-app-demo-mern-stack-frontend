import { TiDeleteOutline } from 'react-icons/ti';
import { color } from 'constant/Color';
import { useWord } from 'hook/useWord';
import { SlActionRedo } from 'react-icons/sl';
import InvisibleForm from './InvisibleForm';

const List = ({ words }) => {
  const { removeWord } = useWord();

  return (
    <>
      {words.map((word, index) => {
        return (
          <div
            key={index}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              padding: 20,
              flexWrap: 'wrap',
              width: 500,
              justifyContent: 'space-between',
              borderTop:
                index === 0 ? `1px solid ${color.tertiaryText}` : 'none',
              borderBottom: `1px solid ${color.tertiaryText}`,
            }}
          >
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
              <InvisibleForm style={{marginRight: 10}} word={word} />
              <a
                href={`/?word=${word}`}
                style={{
                  fontSize: 18,
                  display: 'flex',
                  alignItems: 'center',
                  color: color.primaryText,
                  textDecoration: 'none',
                }}
              >
                <SlActionRedo />
              </a>
            </div>

            <button
              onClick={() => removeWord(word)}
              style={{
                display: 'flex',
                alignItems: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <TiDeleteOutline size={25} color={color.accent} />
            </button>
          </div>
        );
      })}
    </>
  );
};

export default List;
