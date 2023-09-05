import Navbar from './Navbar.jsx';
import EntryList from './EntryList.jsx';
import EditEntry from './EditEntry.jsx';
import './App.css';
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
  const [entriesClicked, setEntriesClicked] = useState(true);
  const [newEntryClicked, setNewEntryClicked] = useState(true);

  return (
    <div>
      <Navbar onClick={() => setNewEntryClicked(!newEntryClicked)} />
      <EntryList entriesClicked={entriesClicked} data={data.entries} />
      <EditEntry newEntryClicked={newEntryClicked} />
    </div>
  );
}

export default App;
