import { useContext } from 'react';
import { WordContext } from 'context/WordContext';

const useWord = () => {
  const context = useContext(WordContext);
  return context;
};

export default useWord;
export { useWord };