import { createContext, useState } from 'react';

// Step 1: Create the context
const WordContext = createContext({
  words: [],
  addWord: () => {},
  removeWord: () => {},
});

// Step 2: Create the provider component
const WordProvider = ({ children }) => {
  const [words, setWords] = useState([]);

  // Function to add a word to the list, ensuring no duplicates
  const addWord = (word) => {
    console.log('addWord:', word);
    setWords((prevWords) => {
      console.log('prevWords:', prevWords);
      // Check if the word already exists to avoid duplicates
      if (prevWords.includes(word)) {
        return prevWords; // Return the existing list if the word is a duplicate
      }
      return [...prevWords, word]; // Add the new word if it's not a duplicate
    });
  };

  // Function to update a word in the list
  const updateWord = (oldWord, newWord) => {
    setWords((prevWords) =>
      prevWords.map((word) => (word === oldWord ? newWord : word))
    );
  };

  // Function to remove all instances of a word from the list
  const removeWord = (wordToRemove) => {
    setWords((prevWords) => prevWords.filter((word) => word !== wordToRemove));
  };
  
  return (
    <WordContext.Provider value={{ words, addWord, removeWord, updateWord }}>
      {children}
    </WordContext.Provider>
  );
};

export { WordContext, WordProvider };
