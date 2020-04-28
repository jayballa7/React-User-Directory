import React, { Component } from "react";
import API from "../utils/employees-api";

export default class Table extends Component {
    constructor(props) {
       super(props)
       this.state = {
          employees: [
             {
                 id: '', name: '', email: '', location: '',
             },
          ]
       }
    }

componentDidMount() {
    API.getEmployees().then(res => {
        this.setState({ employees: res.data.results })
    })
}

renderTableData() {
    return this.state.employees.map((employees, index) => {
       const {id, name, email, location} = employees
       return (
        <tr key={id}>
             <td>{name.first}</td>
             <td>{name.last}</td>
             <td>{email}</td>
             <td>{location.city + ", " + location.state}</td>
          </tr>
       )
    })
 }
  
     render() {
        return (
           <div>
              <h1 id='title'>React Dynamic Table</h1>
              <table id='employees'>
                 <tbody>
                    {this.renderTableData()}
                 </tbody>
              </table>
           </div>
        )
     }

}
