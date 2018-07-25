import React from 'react'

import Border from './Border'
import SingingButton from './SinginButton'
import Paper from 'material-ui/Paper'

const style = {
    height: 300,
    width: 300,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  };
  

const SingingButtonWithBorder = (props) => (

    <div>
        <Paper style={style} zDepth={2}>
            <SingingButton
            label={props.label}
            sound={props.sound}
            makeSound={props.makeSound}
            />
        </Paper>
    </div>
)



export default SingingButtonWithBorder