import { useState } from 'react';
import { data } from './data.js';

export default function EditEntry() {
  const [title, setTitle] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [notes, setNotes] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      title: title,
      photoUrl: photoURL,
      notes: notes,
    };
    console.log(data.entries);
    if (data.editing === null) {
      formValues.entryId = data.nextEntryId++;
      data.entries.unshift(formValues);
    } 
    // else {
    //   formValues.entryId = data.editing.entryId;
    //   updateEntries(formValues);
    //   const updatedLi = renderEntry(formValues);
    //   const liToReplace = findLi(data.editing.entryId);
    //   liToReplace.replaceWith(updatedLi);
    //   updateFormTitle('New Entry');
    //   data.editing = null;
    // }
    // resetForm();
  }

  return (
    <div>
      <h3>New Entry</h3>
      <img
        src={photoURL ? photoURL : '/images/placeholder-image-square.jpg'}
        alt="placeholder"
      />
      <form onSubmit={handleSubmit}>
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
