import { Component } from 'react'
import './add-todo-list-item.css'

export default class AddTodoListItem extends Component {
    render() {
        return (
            <div className="add-todo-list-item d-flex">
                <input type="text" className="add-item search-input form-control" />
                <button 
                    onClick={() => this.props.addItem('Hellow World') } 
                    className="btn btn-info"
                    >Add
                </button>
            </div>
        )
    }
}


