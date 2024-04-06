import React from "react";
import {useParams, useNavigate} from "react-router-dom";
 
const HomeComponent = (props) => {
    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(`https://api.github.com/users/adrienvfd`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);
    let me = {};
    if (data) me = data;
 
    const userName = params.userName ?? 'Default User';
 
    return (
        <div>
            <h3>{`Hello, ${userName}!`}</h3>
            <h1>Welcome to my page!</h1>
            <h2>This is my personal portofolio website!</h2>

            <img src={me.avatar_url} alt="My profile picture" width="200" height="200"/>

            <p>My name is {me.name}.</p>
            <p>I have {me.public_repos} public repositories, and {me.public_gists} public gists.</p>
            <p>Followers: {me.followers}.</p>
            <p>Following: {me.following}.</p>

            <button onClick={() => navigate('/repos')}>Go to repositories</button>
            <button onClick={() => navigate('/about')}>Go to about section</button>
        </div>
    )
};
 
export default HomeComponent;