import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <div className={css.filter}>
      <label>
        <span className={css.text}>Find contacts by name</span>
        <input
          className={css.input}
          type="text"
          value={filter}
          name="filter"
          onChange={e => dispatch(setFilter(e.currentTarget.value))}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
