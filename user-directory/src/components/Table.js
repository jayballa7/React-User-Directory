import React, { Component } from "react";
import API from "../utils/employees-api";
import "../styles/Table.css";

export default class Table extends Component {
    constructor(props) {
       super(props)
       this.state = {
          employees: [
             {
                 login: '', name: '', email: '', phone: '', location: ''
             }
          ]
       }
    }
    headers = [
       {name: 'First Name'},
       {name: 'Last Name'},
       {name: 'Email'},
       {name: 'Phone'},
       {name: 'Location'}
   ]

   componentDidMount() {
      API.getEmployees().then(res => {
         this.setState({ employees: res.data.results })
      })
      .catch(err => console.log(err));
   }

   renderTableData() {
      return this.state.employees.map((employees) => {
         const {login, name, email, phone, location} = employees
            if(login.uuid !== undefined) { 
               return (
                  <tr key = {login.uuid}>
                     <td className = "dataStyle">{name.first}</td>
                     <td className = "dataStyle">{name.last}</td>
                     <td className = "dataStyle">{email}</td>
                     <td className = "dataStyle">{phone}</td>
                     <td className = "dataStyle">{location.city + ", " + location.state}</td>
                  </tr>
               )
            }
      })
   }
  
   render() {
      return (
         <div>
            <table>
               <thead>
                  <tr>
                     {this.headers.map(({name}) => {
                        return(<th key = {name}>{name}</th>)
                     })}
                  </tr>
               </thead>
               <tbody>
                  {this.renderTableData()}
               </tbody>
            </table>
         </div>
      )
   }
}
