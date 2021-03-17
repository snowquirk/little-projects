import axios from 'axios';
import { useState } from 'react';

const Search = ({ onFormSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    onFormSubmit(searchTerm);
    setSearchTerm('');
  };
  return (
    <header>
      <form onSubmit={onSubmitHandler}>
        <input
          type='search'
          className='search'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </form>
    </header>
  );
};

export default Search;
