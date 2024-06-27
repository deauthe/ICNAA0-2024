export default function Contact() {
  return (
    <section id="contact" className="mx-auto my-4 w-3/5">
      <h3 className="mb-4">Send us your query</h3>
      <form className="flex flex-col w-1/2 gap-y-2 border border-slate-800 p-4 rounded-md">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          className="border rounded-sm border-slate-800 p-2"
          placeholder="Your name"
          required
        />
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Your email"
          className="border rounded-sm border-slate-800 p-2"
          required
        />

        <label htmlFor="query">Query</label>
        <textarea
          name="query"
          id="query"
          placeholder="Describe your query here..."
          className="border rounded-sm border-slate-800 p-2 min-h-10"
        />
        <div className="inline-flex justify-between mt-4">
          <button
            className="px-5 py-2 border border-blue-700 rounded w-fit"
            type="submit">
            Cancel
          </button>
          <button
            className="px-5 py-2 bg-blue-700 text-white rounded w-fit"
            type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
