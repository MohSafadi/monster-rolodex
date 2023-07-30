import { Link } from 'react-router-dom';
import MonsterArray from '../monster-array/monster-array.component';


const ProjectMainPage = () => {
    return (
        <div className="App">
            <Link to='/'>Intro page</Link>
            <h1>Monster Rolodex</h1>
            <MonsterArray />
        </div>

    )
}
export default ProjectMainPage;