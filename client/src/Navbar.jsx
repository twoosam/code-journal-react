export default function Navbar({ onClick }) {
  return (
    <div>
      <div>Code Journal</div>
      <button onClick={onClick}>Entries</button>
    </div>
  );
}
