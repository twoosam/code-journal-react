export default function Entries({data}) {
  return (
    <div>
    <h3>Entries</h3>
    <button>NEW</button>
    <ul>{data.map((entry) => <li>{entry}</li>)}</ul>
    </div>

  )
}
