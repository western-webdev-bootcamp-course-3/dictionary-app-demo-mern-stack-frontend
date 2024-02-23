import { BodyMedium } from 'component/Text';
import { useState } from 'react';
import { color } from 'constant/Color';
import { useWord } from 'hook/useWord';

const InvisibleForm = ({ word, ...rest }) => {
  // updateWord function from the useWord hook
  const { updateWord } = useWord();

  // State to hold the current value
  const [value, setValue] = useState(word);

  // State to control whether the input is shown or the text
  const [isEditing, setIsEditing] = useState(false);

  // Handler for double click to enable editing
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // Handler for changing the input
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Handler for submitting the form (or losing focus) to disable editing
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from actually submitting
    updateWord(word, value); // Update the word in the list
    setIsEditing(false);
  };

  return (
    <div {...rest}>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={value}
            onChange={handleChange}
            onBlur={handleSubmit} // Also handle losing focus as a submission
            autoFocus // Automatically focus the input when it appears
            style={{
              fontSize: 18,
              borderColor: color.accent,
              borderWidth: 1,
              borderStyle: 'solid',
              padding: 5,
              width: 200,
              marginRight: 10,
              borderRadius: 5,
              outline: color.accent,
            }}
          />
        </form>
      ) : (
        <BodyMedium onDoubleClick={handleDoubleClick}>{value}</BodyMedium>
      )}
    </div>
  );
};

export default InvisibleForm;
