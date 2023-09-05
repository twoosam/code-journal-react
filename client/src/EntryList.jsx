export default function Entries({ data, onClick }) {
  return (
    <div>
      <h3>Entries</h3>
      <button onClick={onClick}>NEW</button>
      <ul>
        {data.entries.map((entry) => (
          <li>
            <img src={entry.photoUrl} />
            <p>{entry.title}</p>
            <p>{entry.notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
