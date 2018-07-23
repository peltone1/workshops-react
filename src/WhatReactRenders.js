import React from 'react'

const string = 'trolololo'
const number = 134443
const bool = true
const undefinedVar = undefined

const arrWithStrings = ['ala', 'ola']

const WhatReactRenders = () => (
    <div>
        {string}
        <br/>
        {number}
        <br/>
        {bool}{undefinedVar}
        <br/>
        {arrWithStrings}
        <ul>
            {
                arrWithStrings.map((string, index) => <li key={index}>{string}</li>)
            }
            </ul>
    </div>
)

export default WhatReactRenders