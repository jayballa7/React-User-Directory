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
            ],
            results: [],
            searchResults: []
         }
   }
    firstResults = [];

    headers = [
       {name: 'Name <>'},
       {name: 'Email'},
       {name: 'Phone #'},
       {name: 'Location'}
   ];

   componentDidMount() {
      API.getEmployees().then(res => {
         this.setState({ employees: res.data.results });
         this.firstResults = res.data.results
      })
      .catch(err => console.log(err));
   }

   sortName = (event) => {
      this.setState({
        sort: !this.state.sort
      }, () => {
  
        if(this.state.sort){
          this.setState({
            employees: this.state.employees.slice().sort((a,b)=> (a.name.last > b.name.last ? 1 : -1))
          })
        }
        else{
          this.setState({
            employees: this.state.employees.slice().sort((a,b)=> (b.name.last > a.name.last ? 1 : -1))
          })
        }
      })
  }

   renderTableData() {
      return this.state.employees.map((employees) => {
         const {login, name, email, phone, location} = employees
            if(login.uuid !== undefined) { 
               return (
                  <tr key = {login.uuid}>
                     <td className = "dataStyle">{name.last}, {name.first}</td>
                     <td className = "dataStyle">{email}</td>
                     <td className = "dataStyle">{phone}</td>
                     <td className = "dataStyle">{location.city + ", " + location.state}</td>
                  </tr>
               )
            }
      })
   }
  
   render() {
      // const { data } = this.props;
      return (
         <div>
            <table className = "table">
               <thead>
                  <tr>
                     {this.headers.map(({name}) => {
                        return(<th key = {name} onClick={this.sortName}>{name}</th>)
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
