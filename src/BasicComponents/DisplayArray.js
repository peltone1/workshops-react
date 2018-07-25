import React from 'react'


const DisplayArray = (props) => (
    <div>
        <ul>
            {
                props.listOfNames.map((string, index) => <li key={index}>{string}</li>)
            }
        </ul>
    </div>
)


export default DisplayArray