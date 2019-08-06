import React, { useState } from 'react';

export default function SearchForm({ onSearch, queryType }) {
  const [query, setQuery] = useState({
    name: ""
  })
  const handleInputChange = (event) => {
    setQuery({ ...query, name: event.target.value })
  }

  const handleSubmit = e =>
  {
    e.preventDefault()
    onSearch(query.name)
  }

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          placeholder={queryType}
          value={query.name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
