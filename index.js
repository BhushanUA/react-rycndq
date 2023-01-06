import React, { Component } from 'react';
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { render } from 'react-dom';
import ListTools from './ListTools';
import Container from './Container';
import './style.css';

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <div className="app-wrapper">
      <ListTools />
      <Container />
    </div>
  </DndProvider>
);

render(<App />, document.getElementById('root'));
