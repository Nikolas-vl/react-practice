import React from 'react';

const SearchForm = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.topic.value;

    if (topic.trim() === '') {
      alert('Please enter search term!');
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='topic' placeholder='Search articles...' />
      <button>Search</button>
    </form>
  );
};

export default SearchForm;
