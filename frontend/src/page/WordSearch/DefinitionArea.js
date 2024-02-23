import Phonetics from './Phonetics';
import Meaning from './Meaning';
import Source from './Source';

const DefinitionArea = ({ data }) => {
  if (!data) return null;

  return (
    <div style={{ marginTop: '2em' }}>
      <Phonetics data={data} />
      <div>
        {data.meanings.map((meaning, index) => (
          <Meaning key={index} meaning={meaning} phonetics={data.phonetics} />
        ))}
      </div>
      <Source sourceUrls={data.sourceUrls} />
    </div>
  );
};


export default DefinitionArea;
