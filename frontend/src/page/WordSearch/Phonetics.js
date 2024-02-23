import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useWord } from 'hook/useWord';
import { color } from 'constant/Color';
import { HeadingLarge, HeadingMedium } from 'component/Text';

const Phonetics = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const { words, addWord, removeWord } = useWord();

  if (!data) return null;

  // handle save a word
  const handleSave = () => {
    setLoading(true);
    addWord(data.word);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  // handle remove a word from the save list
  const handleRemove = () => {
    setLoading(true);
    removeWord(data.word);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HeadingLarge>{data.word}</HeadingLarge>
        <HeadingMedium style={{ color: color.accent }}>
          {data.phonetic}
        </HeadingMedium>
      </div>
      <div>
        {!words.includes(data.word) ? (
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={handleSave}
            disabled={loading}
          >
            <FaRegStar size={30} color={color.accent} />
          </button>
        ) : (
          <button
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            onClick={handleRemove}
            disabled={loading}
          >
            <FaStar size={30} color={color.accent} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Phonetics;