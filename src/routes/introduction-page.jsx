const IntroductionPage = () => {

    //The main page when going to the website, it contains simple HTML that describe the project
    //The button will take the user to the main project page
    return (
        <div>
            <h1>Monster Rolodex</h1>
            <h2>Project Overview</h2>
            <p>Dynamically search through a list of monsters.</p>
            <p>Project scope: Reactjs/Small scope, and showcases the below:</p>
            <ul>
                <li>useState</li>
                <li>useEffect</li>
                <li>React Components</li>
                <li>React Router Dom</li>
                <li>Mapping & Filtering Arrays</li>
            </ul>
            <button>To Project</button>
        </div>
    )
}

export default IntroductionPage;