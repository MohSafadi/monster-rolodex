import './monster-card.scss';

//This component is the basic HTML for the monster card, it has the image, name and email.
//It will be mapped through at the "monster-list.component"
const MonsterCard = ({ monster }) => {
    return (
        <div className='monster-card'>
            {/* The images are brought from robohash API which generates a random image for any given number after the $ sign*/}
            {/* Using the ID, we are able to generate a unique image for each monster and guarantee that it stays connected to that specific monster*/}
            <img src={`https://robohash.org/${monster.id}?set=set2&size=180x180`} alt={`Monster name: ${monster.name}`} />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default MonsterCard;