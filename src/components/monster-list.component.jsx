import MonsterCard from "./monster-card.component";

//We map through the "newMonsterList" array which we are taking in as a prop from the main "App" page
//Then we output the mapped result int the "MonsterCard" component which has the basic card HTML
//Result is a monster card for each mapped monster from the array
const MonsterList = (props) => {
    return (
        <div className='monster-list-container'>
            {props.newMonsterList.map((monster) => {
                return (
                    <MonsterCard key={monster.id} monster={monster} />
                )
            })}
        </div>
    )
}

export default MonsterList;