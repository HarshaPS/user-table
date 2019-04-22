import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pagination from './Pagination';

class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      dataColumns: '',
      dataRows: [],
      currentPageUsers: []
    }
    this.onChangePage = this.onChangePage.bind(this);
    this.userProfilePage = this.userProfilePage.bind(this);
  }

  componentDidMount() {
    fetch('http://demo9197058.mockable.io/users').then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        dataRows: data
      })
    }).catch(err => {
      console.trace("error occured while fetching data : ", err);
   })
  } 
  
  onChangePage(pageOfItems) {
    this.setState({ currentPageUsers: pageOfItems });
  }

  userProfilePage(event)
  {
    let { dataRows } = this.state;
    let userId = event.target.id;
    let userProfile = dataRows.filter(eachUser => eachUser.id === Number(userId));
    this.props.history.push({ pathname: '/user', state: { userProfile } })
  }

  render()
  {
    let dataColumns = ['First Name', 'Last Name', 'Age', 'Company Name', 'City', 'State', 'Zip', 'Email', 'Web'];
    //Table Header
    let tableHeaders = (<thead>
          <tr>
            {dataColumns.map(function(column) {
              return <th>{column}</th>; })}
          </tr>
      </thead>);

    const { currentPageUsers } = this.state;
      
    return (
    <div className="App">
      <table className="table table-bordered table-hover" width="90%">
        {tableHeaders}
          {currentPageUsers.map(row =>
            (<tr onClick={this.userProfilePage}>
                <td id={row.id}>{row.first_name}</td>
                <td id={row.id}>{row.last_name}</td>
                <td>{row.age}</td>
                <td>{row.company_name}</td>
                <td>{row.city}</td>
                <td>{row.state}</td>
                <td>{row.zip}</td>
                <td>{row.email}</td>
                <td><a href={row.web}>{row.web}</a></td>
              </tr>)
          )
        }
      </table>
      <Pagination onChangePage={this.onChangePage} users={this.state.dataRows}/>
    </div>

    );
  }
}

export default App;


      


