import { color } from 'constant/Color';
import { BodySmall } from 'component/Text';
import { TfiNewWindow } from 'react-icons/tfi';

const Source = ({ sourceUrls }) => {
  if (!sourceUrls) return null;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: '4em',
      }}
    >
      <div style={{ marginRight: 20 }}>
        <BodySmall style={{ color: color.secondaryText }}>Source</BodySmall>
      </div>
      {sourceUrls.map((item, index) => (
        <a
          href={item}
          key={index}
          style={{
            display: 'flex',
            alignItems: 'center',
            color: color.primaryText,
            fontSize: 14,
            gap: 8,
          }}
        >
          {item}
          <TfiNewWindow />
        </a>
      ))}
    </div>
  );
};

export default Source;
