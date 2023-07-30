
//This is a simple search box, the props are taken from the main "App" page.
//We are using this search box to search through the "newMonsterList" array.
const SearchBox = (props) => {
    return (
        <input type='search' value={props.value} onChange={props.onChangeHandler} placeholder={props.placeholder} />
    )
};

export default SearchBox