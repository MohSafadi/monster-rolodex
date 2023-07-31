import { Link } from "react-router-dom";
import './introduction-page.styles.scss';

const IntroductionPage = () => {

    //The home page, it contains simple HTML that describe the project.
    //The button will take the user to the main project page.
    return (
        <div className="intro-container">
            <h1>MONSTER ROLODEX</h1>

            <div className="description-container">
                <h2>Project Overview</h2>
                <p>View a directory of monsters where you can dynamically search through and get instant results.</p>
                <h3>React js - Small Sized</h3>

                <div className="concept-list-container">
                    <h4>Concepts used</h4>
                    <ul>
                        <li>useState</li>
                        <li>useEffect</li>
                        <li>React Components</li>
                        <li>React Router Dom</li>
                        <li>Mapping & Filtering Arrays</li>
                    </ul>
                </div>

            </div>
            <Link className="project-link" to="/monster-rolodex" >To The Project</Link>
        </div>
    )
}

export default IntroductionPage;