import { Component } from 'react'
import './add-todo-list-item.css'

export default class AddTodoListItem extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state.label)
    }

    render() {
        return (
            <form className="add-todo-list-item d-flex"
                  onSubmit={this.onSubmit}>
                <input type="text"
                className="add-item search-input form-control" 
                onChange={this.onLabelChange}
                placeholder='Добавить текст'
                />
                <button 
                    className="btn btn-info"
                    >Add
                </button>
            </form>
        )
    }
}


