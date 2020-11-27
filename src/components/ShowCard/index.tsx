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
        {!setTwo ? null : <span>Set Two: {setTwo.join(', ')}</span>}
        {!encore ? null : <span>Encore: {encore.join(', ')}</span>}
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
