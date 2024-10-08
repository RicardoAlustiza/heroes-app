import { HeroCard } from '../components';
import { useForm } from '../../hooks/useForm';
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroesByName } from '../helpers';
import queryString from 'query-string';

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse( location.search );
  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({
    searchText: q
  })

  const onSearchSubmit = (e) => {
    e.preventDefault();

    //if( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }


  return (
    <>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={ onSearchSubmit }>
            <input type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={ searchText }
              onChange={ onInputChange }
            />

            <button className="btn btn-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {
            (q === '') 
            ? <div className="alert alert-info">Search a hero...</div>
            : (heroes.length === 0) && <div className="alert alert-danger">No results with <b>{q}</b></div>
          }

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } { ...hero } />
            ))
          }
        </div>
      </div>
    </>
  )
}
