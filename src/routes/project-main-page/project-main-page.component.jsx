import { Link } from 'react-router-dom';
import MonsterArray from '../../components/monster-array/monster-array.component';
import './project-main-page.styles.scss';

//This route is where we view the main project.
const ProjectMainPage = () => {
    return (
        <div className="App">
            <Link to='/'>Intro page</Link>
            <h1>Monster Rolodex</h1>
            <div className='monster-list'>
                <MonsterArray />
            </div>

        </div>

    )
}
export default ProjectMainPage;