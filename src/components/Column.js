import { Component } from 'react';
import { Droppable } from 'react-beautiful-dnd';


import Task from './Task'

export default class Column extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { list, type, deleteCard } = this.props;

        return <Droppable droppableId={ `col-${ type }` }>
            {
                provided => {
                    <div { ...provided.droppableProps } ref={provided.innerRef}>
                        { list.map(obj => <Task name={ obj.name } id={obj.id}  deleteCard={ deleteCard } type={type}></Task>) }
                        {provided.placeholder}
                    </div>
                }
            }
        </Droppable>
    }
}