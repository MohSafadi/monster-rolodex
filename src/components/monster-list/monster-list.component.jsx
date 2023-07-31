import MonsterCard from "../monster-card/monster-card.component";
import './monster-list.styles.scss';

//We map through the "newMonsterList" array which we are taking in as a prop from the "monster-array" page
//Then we output the mapped result to the "MonsterCard" component which has the basic card HTML
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