import { useEffect, useState } from 'react';
import MonsterList from '../monster.list.component';
import SearchBox from '../search.box.component';

//This is the main page where we fetch the monster list from the API.
//This page also includes the search functionality.
const MonsterArray = () => {

    //monsterList is the array thay will save the initial fetch data from the API.
    const [monsterList, setMonsterList] = useState([])
    //newMonsterList takes the monsterList array and we use this array to implement our functions from here on.
    //We use this array rather than the original "monsterList" to avoid changing the original array.
    const [newMonsterList, setNewMonsterList] = useState(monsterList)
    //A simple useState to keep track of the search box string.
    const [monsterSearch, setMonsterSearch] = useState("");


    //useEffect is used to fetch so we avoid the unlimited mounting loop that fetch would cause with react.
    //we fetch the users and set them into the main array "setMonsterList"
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) => setMonsterList(users));
    }, []);

    //Simple handler to track the string input in the searchBox.
    //The string is set to lower case to make searching ignore case sensitivity.
    //Finally its set into the "monsterSearch" useState.
    const handleSearch = (event) => {
        const searchString = event.target.value.toLocaleLowerCase();
        setMonsterSearch(searchString);
    };

    //This function filteres the original "monsterList" array and sets it into the "newMonsterList" array.
    //It's able to track the monsterSearch string and output the result that would include the entered string.
    //This useEffect is only fired if a change in either monterList or monsterSearch is detected.
    useEffect(() => {
        const newMonsterSearchString = monsterList.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(monsterSearch);
        });
        setNewMonsterList(newMonsterSearchString)
    }, [monsterList, monsterSearch])


    return (
        //This component's data is shared between the "SearchBox" and "MonsterList" components as props.
        <div>
            <SearchBox value={monsterSearch} onChangeHandler={handleSearch} placeholder="Search Monsters" />

            <MonsterList newMonsterList={newMonsterList} />
        </div>
    )
}

export default MonsterArray;