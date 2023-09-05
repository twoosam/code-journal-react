import Navbar from './Navbar.jsx';
import EntryList from './EntryList.jsx';
import EditEntry from './EditEntry.jsx';
import { useState } from 'react';

const data = {
  view: 'entry-form',
  entries: [
    {
      imgURL: '/images/placeholder-image-square.jpg',
      title: 'random title',
      notes: 'random note',
    },
  ],
  editing: null,
  nextEntryId: 1,
};

function App() {
  const [view, setView] = useState('edit-entry');

  return (
    <div>
      <Navbar onClick={() => setView('entries')} />
      { view ==='entries' && <EntryList onClick={() => setView('edit-entry')} data={data.entries} />}
      { view ==='edit-entry' && <EditEntry /> }
    </div>
  );
}

export default App;
