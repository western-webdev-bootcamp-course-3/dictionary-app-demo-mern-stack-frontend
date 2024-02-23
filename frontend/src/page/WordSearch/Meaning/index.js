import { IoPlayCircleOutline } from 'react-icons/io5';
import { color } from 'constant/Color';
import { HeadingSmall, BodyMedium } from 'component/Text';
import Synonym from './Synonym';
import Type from './Type';

const Meaning = ({ meaning, phonetics }) => {
  // Define the function to play the audio
  const playAudio = (index) => {
    const rightIndex = phonetics.length > index ? index : 0;
    // Create a new Audio object and set its source to the URI
    const audio = new Audio(phonetics[rightIndex].audio);
    // Play the audio
    audio.play();
  };

  return (
    <>
      <Type type={meaning.partOfSpeech} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div>
            <HeadingSmall style={{ color: color.secondaryText }}>
              Meaning
            </HeadingSmall>
          </div>
          <div style={{ marginLeft: 22, marginTop: 25 }}>
            {meaning.definitions.map((item, index) => (
              <div key={index}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginBottom: 13,
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      backgroundColor: color.accent,
                      width: 5,
                      height: 5,
                      borderRadius: 2.5,
                      marginRight: 20,
                    }}
                  />
                  <BodyMedium style={{ flex: 1 }}>{item.definition}</BodyMedium>
                </div>
                {item.example && (
                  <div style={{ flexDirection: 'row', marginBottom: 13 }}>
                    <BodyMedium
                      key={index}
                      style={{
                        color: color.secondaryText,
                        marginLeft: 25,
                      }}
                    >{`\u201c${item.example}\u201d`}</BodyMedium>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {phonetics && phonetics.length > 0 && (
          <div>
            <IoPlayCircleOutline
              size={80}
              color={color.accent}
              style={{ cursor: 'pointer' }}
              onClick={() => playAudio(0)}
            />
          </div>
        )}
      </div>
      {meaning.synonyms && meaning.synonyms.length > 0 && (
        <Synonym synonyms={meaning.synonyms} />
      )}
    </>
  );
};

export default Meaning;
