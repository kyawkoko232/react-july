import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term)
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <div>

      <div className="w-full max-w-xs mx-auto">
        <form className="bg-white shadow-md border my-5 rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" value={term} onChange={handleChange} />
          </div>
        </form>
      </div>

    </div>
  )
}

export default SearchBar;