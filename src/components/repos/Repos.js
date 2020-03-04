import React, {useContext} from 'react'
import RepoItem from './RepoItem'
import GitHubContext from '../../context/github/gitHubContext'

const Repos = ({repos}) => {
    const gitHubContext = useContext(GitHubContext);

    return gitHubContext.repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}


export default Repos;