import React from 'react';
import { useDrag } from 'react-dnd';

const TOOL = 'tool';

const listItems = [
  {
    name: 'textbox',
  },
  {
    name: 'radio',
  },
  {
    name: 'submit',
  },
  {
    name: 'date',
  },
  {
    name: 'checkbox',
  },
  {
    name: 'dropdown',
  },
];

const Tool = ({ name }) => {
  const [, drag] = useDrag({
    item: {
      type: TOOL,
      name,
    },
  });
  return (
    <div className="tool" ref={drag}>
      {name}
    </div>
  );
};

const ListTools = () => {
  return (
    <div className="tool-wrapper">
      {listItems.map((item) => (
        <Tool name={item.name} />
      ))}
    </div>
  );
};

export default ListTools;
