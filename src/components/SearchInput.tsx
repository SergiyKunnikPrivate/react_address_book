import React, { useState } from 'react';
import './SearchInput.css'
import { searchContacts } from '../redux/actions/contacts-actions';
import { useDispatch } from 'react-redux';

function SearchInput(): JSX.Element {

  const dispatch = useDispatch();

  const [seachQuery, setSeachQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setSeachQuery(event.target.value);

  const handleSubmit = () => {
    dispatch(searchContacts(seachQuery));
    setSeachQuery('')
  }
  return (
    <div className="SearchInput">
      <input type="text" onChange={handleChange}/>
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default SearchInput;