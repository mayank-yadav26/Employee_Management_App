import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { withRouter } from './withRouter';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: window.location.href.split('/')[4],
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.emailIdHandler = this.emailIdHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }
    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                emailId: employee.emailId
            });
        });
    }
    changeFirstNameHandler(event) {
        this.setState({ firstName: event.target.value });
    }
    changeLastNameHandler(event) {
        this.setState({ lastName: event.target.value });
    }
    emailIdHandler(event) {
        this.setState({ emailId: event.target.value });
    }
    updateEmployee(e) {
        let employee = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId };
        console.log('employee : ' + JSON.stringify(employee));
        console.log('ID : '+this.state.id);
        EmployeeService.updateEmployee(employee,this.state.id).then((res)=>{
        });
        this.props.navigate('/employees');
    }
    cancel() {
        this.props.navigate('/employees');
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 offset-md-3' style={{ marginTop: "10px" }}>
                            <h3 className='text-center'>Update Employee</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group' style={{ marginBottom: "10px" }}>
                                        <label>First Name : </label>
                                        <input placeholder='First Name' name='firstName' className='form-control'
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className='form-group' style={{ marginBottom: "10px" }}>
                                        <label>Last Name : </label>
                                        <input placeholder='Last Name' name='lastName' className='form-control'
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className='form-group'>
                                        <label>Email Id : </label>
                                        <input placeholder='Email Id' name='emailId' className='form-control'
                                            value={this.state.emailId} onChange={this.emailIdHandler} />
                                    </div>
                                    <button className='btn btn-success' onClick={this.updateEmployee} style={{ marginTop: "10px" }}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{ marginLeft: "10px", marginTop: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default withRouter(UpdateEmployeeComponent);