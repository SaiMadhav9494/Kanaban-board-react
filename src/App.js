import './App.css';

import Kanban from './KanbanBoard';

function App() {
  return (
    <div>
      <div style={{
        width: '90%',
        margin: '20px auto',
        height: '30px',
        backgroundColor: 'blue'
      }}></div>
      <Kanban></Kanban>
    </div>
  );
}

export default App;
