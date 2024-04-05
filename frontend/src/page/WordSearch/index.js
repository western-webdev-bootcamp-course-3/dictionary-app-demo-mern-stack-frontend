import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import InputArea from './InputArea';
import DefinitionArea from './DefinitionArea';

const WordSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const word = searchParams.get('word') || 'test';

  // word definition
  const [definition, setDefinition] = useState(null);

  // searching state
  const [searching, setSearching] = useState(false);

  // search word function
  const searchServer = async (word) => {
    try {
      setSearching(true);
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      console.log(response.data[0]);
      if (response.data.length > 0) setDefinition(response.data[0]);
    } catch (error) {
      setDefinition(null);
    } finally {
      setSearching(false);
    }
  };

  // useEffect
  useEffect(() => {
    searchServer(word);
  }, []);

  return (
    <div>
      <InputArea searchServer={searchServer} initialWord={word} />
      <DefinitionArea data={definition} searching={searching} />
    </div>
  );
};

export default WordSearch;
