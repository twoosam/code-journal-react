import Navbar from './Navbar.jsx'
import EntryList from './EntryList.jsx'
import EditEntry from './EditEntry.jsx'

const data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1,
};

function App() {

  return (
    <div>
    <Navbar />
    <EntryList data={data.entries}/>
    <EditEntry />
    </div>
  );
}

export default App;
