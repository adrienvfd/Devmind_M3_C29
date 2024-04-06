import React, {useEffect, useState} from 'react';
import Select from 'react-select';

const RepositoryDetails = (props) => {

    const [options, setOptions] = useState([]);
    const [repository, setRepository] = useState(null);

    useEffect(() => {
        // Fetch the list of repositories if it hasn't been fetched yet
        if(options.length === 0) {
            fetch('https://api.github.com/users/adrienvfd/repos')
                .then(response => response.json())
                .then(data => setOptions(data.map(repo => {
                    return {
                        value: repo.id,
                        label: repo.name
                    }
                })));
        }

        // Find the repository with the specified ID
        const repo = props.repositories.find(repo => repo.id === props.match.params.id);
        if(repo) {
            setRepository(repo);
        }
    }, [props.repositories, props.match.params.id, options.length]);

    const handleChange = (selectedOption) => {
        props.history.push(`/adrienvfd/repos/${selectedOption.value}`);
    }

    return (
        <div>
            <h1>Repository details</h1>
            <Select options={options} onChange={handleChange} defaultValue={{value: props.match.params.id, label: repository ? repository.name : ''}} />
            {repository &&
                <ul>
                    <li>Name: {repository.name}</li>
                    <li>Description: {repository.description}</li>
                    <li>Forks: {repository.forks_count}</li>
                    <li>Stars: {repository.stargazers_count}</li>
                    <li>Default branch: {repository.main_branch}</li>
                    <li>Owner: {repository.owner.login}</li>
                </ul>
            }
            {!repository &&
                <p>Repository not found</p>
            }
        </div>
    );
}

export default RepositoryDetails;
