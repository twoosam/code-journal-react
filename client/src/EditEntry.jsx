
export default function EditEntry() {
  return (
    <div>
      <h3>New Entry</h3>
      <img src="/images/placeholder-image-square.jpg" alt="placeholder" />
      <form>
        <label for="title">Title</label>
        <input name="title" />
        <label for="photoURL">Photo URL</label>
        <input name="photoURL" />
        <label for="notes">Notes</label>
        <input name="notes" />
        <button>Submit</button>
      </form>
    </div>
  );
}
