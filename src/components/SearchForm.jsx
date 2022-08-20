const SearchForm = ({ query, setQuery, submitHandler }) => {
  return (
    <form onSubmit={ submitHandler }>
      <input
        type='text'
        name={ query }
        value={ query }
        onChange={ (e) => setQuery(e.target.value) }
        // onKeyPress={ submitHandler }
        placeholder='Enter Location'

      />
      {/* <button type="submit">submit</button> */ }
    </form>
  );
}

export default SearchForm;



