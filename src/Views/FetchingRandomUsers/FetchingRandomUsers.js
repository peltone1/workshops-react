import React from 'react'

import User from './User'
import PaperRefined from '../../Components/PaperRefined'
import Search from './Search'

class FetchingRandomUsers extends React.Component {
    state = {
        randomUserData: null,
        searchPhrase: ''
    }
    componentDidMount() {
        fetch('https://randomuser.me/api?results=10')
            .then(response => response.json())
            .then(datafromResponse => {
                this.setState({
                    randomUserData: datafromResponse.results
                })
            }
            )
    }

    searchPhraseChangeHandler = (event) => {
        this.setState({
            searchPhrase: event.target.value
        })
    }

    render() {
        const usersList = (
            this.state.randomUserData
            &&
            this.state.randomUserData
                .filter(el => el.name.first.indexOf(this.state.searchPhrase) >= 0 )
                .map((user) => (
                    <User
                        key={user.login.uuid} user={user}
                    />))
        )
        return (
            <div>
                <PaperRefined>
                    <Search
                        searchPhraseChangeHandler={this.searchPhraseChangeHandler}
                        searchPhrase={this.state.searchPhrase}
                    />
                </PaperRefined>
                {usersList}
                <PaperRefined>


                </PaperRefined>
            </div>
        )
    }
}


export default FetchingRandomUsers