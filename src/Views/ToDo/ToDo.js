import React from 'react'

import Forms from './Forms'
import List from './List'
// import Task from './Task'

class ToDo extends React.Component {
    state = {
        tasks: [
            { isCompleted: false, text: 'odkurz', key: '123' },
            { isCompleted: false, text: 'umyj gary', key: '654' }
        ],
        newTaskText: ''
    }

    componentDidMount() {
        const lastState = JSON.parse(localStorage.getItem('jfdddl5-app-todo-state'))

        if (lastState === null) return
        this.setState(lastState)
    }

    componentWillUnmount() {
        localStorage.setItem('jfdddl5-app-todo-state', JSON.stringify(this.state))
    }

    onNewTaskTextChanged = (event) => {


        this.setState({
            newTaskText: event.target.value
        })
    }

    onAddNewTaskClickHandler = () => {
        if (this.state.newTaskText === '') return
        this.setState({
            tasks: this.state.tasks.concat({
                isCompleted: false, text: this.state.newTaskText, key: Math.random()
            }),
            newTaskText: ''
        })
    }

    render() {
        return (
            <div>
                <Forms
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChanged={this.onNewTaskTextChanged}
                    onAddNewTaskClickHandler={this.onAddNewTaskClickHandler}
                />
                <List
                    tasksList={this.state.tasks}

                />
            </div>

        )
    }
}

export default ToDo