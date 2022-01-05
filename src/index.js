import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import Links from './Links'
import TimeTable from './TimeTable'
import Courses from './Courses'

ReactDOM.render(
  <React.StrictMode>
    <ReactNotification />
    <Links />
    <TimeTable />
    <Courses />
  </React.StrictMode>,
  document.getElementById('root')
);
