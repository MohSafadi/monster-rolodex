//This component is the basic HTML for the monster card, it has the image, name and email.
//It will be mapped through at the "monster-list.component"
const MonsterCard = ({ monster }) => {
    return (
        <div className='monster-card'>
            {/* <img src='' alt='' /> */}
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
        </div>
    )
}

export default MonsterCard;