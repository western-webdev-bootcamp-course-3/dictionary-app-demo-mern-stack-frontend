import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import { useWord } from 'hook/useWord';
import { color } from 'constant/Color';
import { HeadingLarge, HeadingMedium } from 'component/Text';

const Phonetics = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [isSaved, setIsSaved] = useState(false);
  const { isWordSaved, addWord, removeWord } = useWord();

  // handle save a word
  const handleSave = async () => {
    try {
      setLoading(true);
      await addWord(data.word);
      setLoading(false);
      setIsSaved(true);
    } catch (error) {
      console.error(error);
    }
  };

  // handle remove a word from the save list
  const handleRemove = async () => {
    try {
      setLoading(true);
      await removeWord(data.word);
      setLoading(false);
      setIsSaved(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // check if the word is saved
    const handleIsSaved = async () => {
      try {
        const response = await isWordSaved(data.word);
        return response;
      } catch (error) {
        if (error.response && error.response.status === 404) {
          return false;
        } else {
          throw error;
        }
      }
    };

    handleIsSaved().then((result) => {
      // update the saved state
      setIsSaved(result);
      // update the loading state
      setLoading(false);
    });
  }, [data]);

  // console.log(isSaved);

  if (!data) return null;

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
        {!isSaved ? (
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
