import React from 'react'
import RepoItem from './RepoItem'
import ProptTypes from 'prop-types'

const Repos = ({repos}) => {
    return repos.map(repo => <RepoItem repo={repo} key={repo.id}/>)
}

Repos.propTypes = {
    repos: ProptTypes.array.isRequired
};

export default Repos;