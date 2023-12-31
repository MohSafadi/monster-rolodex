import './search-box.styles.scss';

//This is a simple search box, the props are taken from the main "monster-array" page.
//We are using this search box to search through the "newMonsterList" array.
const SearchBox = (props) => {
    return (
        <input className="search-box" type='search' value={props.value} onChange={props.onChangeHandler} placeholder={props.placeholder} />
    )
};

export default SearchBox