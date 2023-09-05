import { useState } from 'react';

export default function EditEntry({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [notes, setNotes] = useState('');

  return (
    <div>
      <h3>New Entry</h3>
      <img
        src={photoURL ? photoURL : '/images/placeholder-image-square.jpg'}
        alt="placeholder"
      />
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          name="title"
        />
        <label htmlFor="photoURL">Photo URL</label>
        <input
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
          name="photoURL"
        />
        <label htmlFor="notes">Notes</label>
        <input
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          name="notes"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}
