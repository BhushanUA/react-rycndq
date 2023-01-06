import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import Draggable from 'react-draggable';
const Container = () => {
  const [boxes, setBoxes] = useState([]);
  const [status, setStatus] = useState(false);
  const [{ canDrop, isOverCurrent }, drop] = useDrop({
    accept: 'tool',
    canDrop: () => true,
    drop: (item) => {
      if (isOverCurrent) {
        setBoxes([...boxes, item]);
      }
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  });
  // function Components() {
  //   var component = 'abc';

  //   {
  //     boxes.map((member) => (component = member.name));
  //   }
  //   if (component == 'textbox') {
  //     return <input placeholder="text" />;
  //   }

  //   if (component == 'radio') {
  //     return <input type='radio'/>;
  //   }
  //   if (component == 'submit') {
  //     return <input type='submit'/>;
  //   }
  //   if (component == 'date') {
  //     return <input type='date'/>;
  //   }
  // }
  return (
    
    <div className="container">
      {boxes.map((member) => (
        <Draggable axis="y">
          <div className="box">
            {member.name}
            <div />
            <input className="input" type={member.name} disabled={status} />
            <div />
            <button className="status"
              onClick={() => {
                setStatus(false);
              }}
            >
              ✅
            </button>
            <button className="status" 
              onClick={() => {
                setStatus(true);
              }}
            >
              ❌
            </button>
          </div>
        </Draggable>
      ))}
      <div className={`drop-area ${canDrop ? 'highlight' : ''}`} ref={drop}>
        Drag here
      </div>
    </div>
  );
};

export default Container;
