import Navbar from './Navbar.jsx';
import EntryList from './EntryList.jsx';
import EditEntry from './EditEntry.jsx';
import { useState } from 'react';
import { data } from './data.js';

function App() {
  const [view, setView] = useState('edit-entry');

  function handleSubmit(event) {
    event.preventDefault();
    const formValues = {
      title: event.target.title.value,
      photoUrl: event.target.photoURL.value,
      notes: event.target.notes.value,
    };
    setView('entries');
    data.entries.push(formValues);
    console.log(data.entries);
    // if (data.editing === null) {
    //   formValues.entryId = data.nextEntryId++;
    //   data.entries.unshift(formValues);
    //   $ul.prepend(renderEntry(formValues));
    // } else {
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
      <Navbar onClick={() => setView('entries')} />
      {view === 'entries' && (
        <EntryList onClick={() => setView('edit-entry')} data={data} />
      )}
      {view === 'edit-entry' && <EditEntry onSubmit={handleSubmit} />}
    </div>
  );
}

export default App;
