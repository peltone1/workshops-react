import React from 'react'

import TextField from 'material-ui/TextField'

const Search = (props) => (
    <div>
        <TextField
            placeholder={'Search'}
            fullWidth={true}
            onChange={props.searchPhraseChangeHandler}
            value={props.SearchPhrase}
        />
    </div>
)

export default Search