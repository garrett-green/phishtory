import { Show } from '@local';
import { h } from 'preact';

interface ShowCardProps {
  show: Show;
}

const ShowCard = ({
  show: {
    date,
    encore,
    jamNotes,
    location,
    phishNetURL,
    rating,
    setOne,
    setTwo,
  },
}: ShowCardProps) => {
  /*
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px;
  */
  // const cardStyling: JSXInternal.HTMLAttributes<HTMLDivElement> = {
  //   box,
  // };

  /*
  style={{
        backgroundColor: 'lightblue',
        width: '20%',
        height: '20%',
        margin: '1%',
        padding: '1%',
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'stretch',
        alignItems: 'stretch',
      }}
  */

  return (
    <article class="card">
      <div>
        <h3>
          {date} - {location}
        </h3>
        <hr></hr>
        <span>
          Rating: <strong>{rating}</strong>
        </span>
        <span>Set One: {setOne.join(', ')}</span>
        <span>Set Two: {setTwo.join(', ')}</span>
        <span>Encore: {encore.join(', ')}</span>
        <span>
          <a href={phishNetURL} target="_blank">
            LINK
          </a>
        </span>
      </div>
    </article>
  );
};

export default ShowCard;
