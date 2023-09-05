export default function Entries({ data, entriesClicked }) {
  return (
    <div className={entriesClicked ? undefined : 'hidden'}>
      <h3>Entries</h3>
      <button>NEW</button>
      <ul>
        {data.map((entry) => (
          <li>
            <img src={entry.imgURL} />
            <p>{entry.title}</p>
            <p>{entry.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
