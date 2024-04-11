import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import styled from 'styled-components';
import { color } from 'constant/Color';

const InputArea = ({ searchServer, initialWord, data, searching }) => {
  const [text, setText] = useState(initialWord);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const word = text.trim();
    if (word === '') return;
    searchServer(word);
  };

  return (
    <InputForm onSubmit={handleSubmit} data={data} searching={searching}>
      <Input
        type='text'
        value={text}
        onChange={handleChange}
        placeholder='Search for any word...'
      />
      <Button type='submit' disabled={text.trim() === ''}>
        <IoIosSearch size={20} color='rgb(164, 69, 237)' />
      </Button>
    </InputForm>
  );
};

const InputForm = styled.form`
  display: flex;
  background-color: ${color.secondaryBackground};
  padding: 1rem;
  gap: 1rem;
  border-radius: 8px;
  justify-content: space-between;

  &:focus-within {
    box-shadow: 0 0 0 2px
      ${(props) => (!props.data && !props.search ? color.error : color.accent)};
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;

  &:focus {
    outline: none;
    border: none;
  }
`;

const Button = styled.button`
  background-color: inherit;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: 0.3s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export default InputArea;
