import Navbar from './Navbar.jsx';
import EntryList from './EntryList.jsx';
import EditEntry from './EditEntry.jsx';
import { useState } from 'react';
import { data } from './data.js';

function App() {
  const [view, setView] = useState('edit-entry');

  function handleEdit() {
   setView('edit-entry')
  }

  return (
    <div>
      <Navbar onClick={() => setView('entries')} />
      {view === 'entries' && (
        <EntryList onClick={() => setView('edit-entry')} data={data} onEdit={handleEdit}/>
      )}
      {view === 'edit-entry' && <EditEntry />}
    </div>
  );
}

export default App;
