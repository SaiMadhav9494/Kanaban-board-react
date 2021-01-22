import { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Column from './components/Column';

export default class Kanban extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pendingList : [{ id: 1, name: 'List1' }, { id: 2, name: 'List2' }, { id: 3, name: 'List3' }],
            inProgressList: [{ id: 1, name: 'List1' }, { id: 2, name: 'List2' }, { id: 3, name: 'List3' }, { id: 4, name: 'List1' }, { id: 5, name: 'List2' }, { id: 6, name: 'List3' }],
            completedList: [{ id: 1, name: 'List1' }, { id: 2, name: 'List2' }],
        }
    }

    addList = (type) => {
        switch(type) {
            case 'pending': this.setState({
                pendingList: this.state.pendingList.concat({ id: this.state.pendingList.length + 1, name: `List${this.state.pendingList.length + 1}` })
            }); break;
            case 'inprogress': this.setState({
                inProgressList: this.state.inProgressList.concat({ id: this.state.inProgressList.length + 1, name: `List${this.state.inProgressList.length + 1}` })
            }); break;
            case 'completed': this.setState({
                completedList: this.state.completedList.concat({ id: this.state.completedList.length + 1, name: `List${this.state.completedList.length + 1}` })
            }); break;
            default: break;
        }
    }

    deleteCard = (type, id) => {
        switch(type) {
            case 'pending': this.setState({
                pendingList: this.state.pendingList.filter(obj => obj.id !== id)
            }); break;
            case 'inprogress': this.setState({
                inProgressList: this.state.inProgressList.filter(obj => obj.id !== id)
            }); break;
            case 'completed': this.setState({
                completedList: this.state.completedList.filter(obj => obj.id !== id)
            }); break;
            default: break;
        }
    }

    onDragEnd = () => null;

    render() {
        return <div className="row">
            <DragDropContext>
                <div style={{
                    width: '25%'
                }}>
                    <h4>Pending Task</h4>

                    <div style={{
                        border: '2px solid gray'
                    }}>
                        <button onClick={ (e) => this.addList('pending') }>Add</button>

                        <Column type="pending" list={ this.state.pendingList } deleteCard={ this.deleteCard }></Column>
                    </div>
                </div>
            </DragDropContext>

            <DragDropContext>
                <div style={{
                    width: '25%'
                }}>
                    <h4>In Progress</h4>

                    <div style={{
                        border: '2px solid gray'
                    }}>
                        <button onClick={ (e) => this.addList('inprogress') }>Add</button>

                        <Column type="inprogress" list={ this.state.inProgressList } deleteCard={ this.deleteCard }></Column>
                    </div>
                </div>
            </DragDropContext>

            <DragDropContext>
                <div style={{
                    width: '25%'
                }}>
                    <h4>Completed</h4>

                    <div style={{
                        border: '2px solid gray'
                    }}>
                        <button onClick={ (e) => this.addList('completed') }>Add</button>

                        <Column type="completed" list={ this.state.completedList } deleteCard={ this.deleteCard }></Column>
                    </div>
                </div>
            </DragDropContext>
      </div>
    }
}