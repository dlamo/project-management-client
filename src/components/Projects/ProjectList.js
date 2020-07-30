import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AddProject from './AddProject'

export class ProjectList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projects: []
        }
    }
    componentDidMount() {
        this.getAllProjects()
    }
    getAllProjects = () =>{
        axios.get(`http://localhost:3002/api/projects`)
        .then(response => {
            this.setState({
                projects: response.data
            })
        })
    }
    render() {
        const projects = this.state.projects.map(project => (
            <div key={project._id}>
                <Link to={`/projects/${project._id}`}>
                    <h3>{project.title}</h3>
                </Link>
                <ul>
                  { project.tasks.map((task, index) => {
                    return <li key={index}>{task.title}</li>
                  }) }
                </ul>  
                {/* <p style={{maxWidth: '400px'}} >{project.description} </p> */}
            </div>
        ))
        return (
            <div>
                <div style={{width: '60%', float:"left"}}>
                    {projects}
                </div>
                <div style={{width: '40%', float:"right"}}>
                    <AddProject getData={() => this.getAllProjects()}/>
                </div>
            </div>
        )
    }
}

export default ProjectList