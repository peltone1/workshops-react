import React from 'react'

import SingingButtonWithBorder from './SingingButtonWithBorder.js'

const App = () => (
  <div>
      <SingingButtonWithBorder
        label={'Przycisk1'}
        sound={'lalalalalalal'}
        makeSound={() => alert('Im from makeSound')}
      />
  </div>
)


export default App
