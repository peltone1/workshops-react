import React from 'react'

import Task from './Task'
import PaperRefined from '../Components/PaperRefined'

const List = (props) => (
    <div>
        <PaperRefined>
            {
                props.tasksList.map(
                    (task) => (
                        <Task
                            key={task.key}
                            task={task} />
                    )
                )
            }
        </PaperRefined>
    </div>
)

export default List