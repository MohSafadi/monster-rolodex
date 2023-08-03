import { Link } from 'react-router-dom';
import MonsterArray from '../../components/monster-array/monster-array.component';
import './project-main-page.styles.scss';

//This route is where we view the main project.
const ProjectMainPage = () => {
    return (
        <div className="App">
            <div className='heading'>
                <Link className="heading-intro-link" to='/monster-rolodex'>Intro page</Link>
                <h1 className='heading-title'>MONSTER ROLODEX</h1>
            </div>
            <MonsterArray />
        </div>

    )
}
export default ProjectMainPage;