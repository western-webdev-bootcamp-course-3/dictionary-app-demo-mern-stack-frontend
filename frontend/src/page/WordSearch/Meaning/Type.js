import { color } from 'constant/Color';
import { HeadingMedium } from 'component/Text';

const Type = ({ type }) => {
  if (!type) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        marginTop: '2em',
        marginBottom: '2em',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <HeadingMedium style={{ fontWeight: 'bold', marginRight: '1em' }}>
        {type}
      </HeadingMedium>
      <div
        style={{
          flex: 1,
          height: 1,
          backgroundColor: color.tertiaryText,
        }}
      />
    </div>
  );
};

export default Type;
