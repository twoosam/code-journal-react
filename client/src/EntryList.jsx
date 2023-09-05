export default function Entries({ data, onClick, onEdit}) {
  return (
    <div>
      <h3>Entries</h3>
      <button onClick={onClick}>NEW</button>
      <ul>
        {data.entries.map((entry, index) => (
          <li key={index}>
            <img src={entry.photoUrl} />
            <p>{entry.title}</p>
            <p>{entry.notes}</p>
            <button onClick={onEdit}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
