import { color } from 'constant/Color';
import { HeadingSmall } from 'component/Text';

const Synonym = ({ synonyms }) => {
  if (!synonyms || synonyms.length === 0) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
      }}
    >
      <HeadingSmall
        style={{
          color: color.secondaryText,
          alignSelf: 'flex-start',
          marginRight: 20,
        }}
      >
        Synonyms
      </HeadingSmall>
      {synonyms.map((item, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HeadingSmall style={{ color: color.accent, marginRight: 8 }}>
            {item}
          </HeadingSmall>
          {index < synonyms.length - 1 && (
            <div
              style={{
                backgroundColor: color.tertiaryText,
                marginRight: 8,
                marginTop: 2,
                width: 5,
                height: 5,
                borderRadius: 2.5,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Synonym;
