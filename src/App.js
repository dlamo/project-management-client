import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProjectList from './components/Projects/ProjectList';
import ProjectDetails from './components/Projects/ProjectDetails';
import TaskDetails from './components/Tasks/TaskDetails';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <h1>Esta es la homepage</h1>
        </Route>
        <Route exact path='/projects'>
          <ProjectList />
        </Route>
        <Route path='/projects/:id' render={(props) => <ProjectDetails {...props} />} />
        <Route exact path="/projects/:id/tasks/:taskId" component={TaskDetails} /> {/* <== !!! */} 
      </Switch>
    </div>
  );
}

export default App;
