export default function Form() {
  return (
    <form action="/update-superhero" method="post" className="py-4">
      <label htmlFor="roll">Roll Number</label>
      <input
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs"
        type="text"
        id="roll"
        name="nombre"
        required
      />
    </form>
  );
}
