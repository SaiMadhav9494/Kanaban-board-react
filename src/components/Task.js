import { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';

export default class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { name, id, type } = this.props;

        return <Draggable draggableId={id} index={id}>
            {
                provided => {
                    <div style={{
                        marginTop: '10px'
                    }} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <hr/>
                        <div>{ name }</div>
            
                        <button onClick={ (e) => {
                            return this.props.deleteCard(type, id)
                        }}>Delete</button>
                    </div>;
                }
            }
        </Draggable>
    }
}