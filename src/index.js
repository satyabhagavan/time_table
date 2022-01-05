import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import Links from './Links'
import TimeTable from './TimeTable'
import Courses from './Courses'

ReactDOM.render(
  <React.StrictMode>
    <Links />
    <TimeTable />
    <Courses />
  </React.StrictMode>,
  document.getElementById('root')
);
