import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

// Step 1: Create the context
const WordContext = createContext({
  words: [],
  addWord: () => {},
  removeWord: () => {},
});

// Step 2: Create the provider component
const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  console.log(words);

  // check if a word is saved
  const isWordSaved = async (word) => {
    const response = await axios.get(`http://localhost:8000/words/${word}`);
    return response.status === 200;
  };

  // Function to add a word to the list, ensuring no duplicates
  const addWord = async (word) => {
    if (words.includes(word)) return; // Return if the word already exists in the list

    const response = await axios.post(`http://localhost:8000/words`, {
      id: word,
      word: word,
    });

    setWords([...words, word]);
  };

  // Function to update a word in the list
  const updateWord = async (oldWord, newWord) => {
    const response = await axios.put(`http://localhost:8000/words/${oldWord}`, {
      id: newWord,
      word: newWord,
    });

    setWords((prevWords) =>
      prevWords.map((word) => (word === oldWord ? newWord : word))
    );
  };

  // Function to remove all instances of a word from the list
  const removeWord = async (wordToRemove) => {
    const response = await axios.delete(
      `http://localhost:8000/words/${wordToRemove}`
    );
    setWords((prevWords) => prevWords.filter((word) => word !== wordToRemove));
  };

  useEffect(() => {
    const fetchWords = async () => {
      const response = await axios.get('http://localhost:8000/words');
      setWords(response.data.map((word) => word.word));
    };

    fetchWords();
  }, []);

  return (
    <WordContext.Provider value={{ words, isWordSaved, addWord, removeWord, updateWord }}>
      {children}
    </WordContext.Provider>
  );
};

export { WordContext, WordProvider };
