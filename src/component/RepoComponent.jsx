//Creează o componentă numită ReposComponent care să afișeze, în format tabelar, principalele informații oferite de endpoint-ul anterior, precum: numele repository-ului, numele owner-ului, link-ul către repository, descrierea repository-ului (dacă există), branch-ul default al repository-ului, etc.

import React from "react";
import {useParams, useNavigate} from "react-router-dom";

const RepoComponent = (props) => {

    // fetch my repos: https://api.github.com/users/adrienvfd/repos

    const navigate = useNavigate();
    const params = useParams();

    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch(`https://api.github.com/users/adrienvfd/repos`)
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // Show the repo names and descriptions in a table, with nice colors and style:

    if(data) {
        return (
            <div>
                <h1>Repos</h1>
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Forks</th>
                        <th>Stars</th>
                        <th>Default branch</th>
                        <th>Owner</th>

                    </tr>
                    </thead>
                    <tbody>
                    {data.map(repo => (
                        <tr key={repo.id}>
                            <td><a href={repo.html_url}>{repo.name}</a></td>
                            <td>{repo.description}</td>
                            <td>{repo.forks_count}</td>
                            <td>{repo.stargazers_count}</td>
                            <td>{repo.main_branch}</td>
                            <td>{repo.owner.login}</td>
                            <td></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Loading...</h1>
            </div>
        );
    }
};

export default RepoComponent;