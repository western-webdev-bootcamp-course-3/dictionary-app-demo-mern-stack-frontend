import { useWord } from 'hook/useWord';
import { HeadingLarge, BodyMedium } from 'component/Text';
import List from './List';

const WordList = () => {
  const { words } = useWord();

  return (
    <div style={{ marginLeft: '4rem', marginRight: '4rem' }}>
      <HeadingLarge>Saved words</HeadingLarge>
      <div style={{ marginTop: '4rem' }}>
        {words.length === 0 ? (
          <BodyMedium>No words saved yet</BodyMedium>
        ) : (
          <List words={words} />
        )}
      </div>
    </div>
  );
};

export default WordList;
