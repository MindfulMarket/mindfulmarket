import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import { getAllUsers, addNewUser } from '../../store';

/* -----------------    COMPONENT     ------------------ */
export class AdminUsers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      shippingAddress: '',
      password: '',
      isAdmin: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  componentDidMount() {
    this.props.getUsers();
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addUser(this.state);
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      shippingAddress: '',
      password: '',
      isAdmin: false
    })
  }

  handleDelete(id) {
    event.preventDefault();
    // this.props.deleteUser(id)
  }

  render() {
    let users;
    if (this.props.allUsers.length) {

      users = this.props.allUsers.map(user => {
        return (
          <li key={user.id}>
            <Link to={`/admin/users/${user.id}`} style={{color: 'black'}}>{user.firstName} {user.lastName}<button>Edit</button>
            </Link>
            <button onClick={() => this.handleDelete(user.id)}>delete </button>
          </li>
        )
      })
    }


    return (
      <div className="page">
        {
          !this.props.user.isAdmin
            ? <h1>Not Authorized</h1>
            :
            <div>
              <AdminNav />
              <h1>Users</h1>
              <ul style={{ fontSize: '22px', marginBottom: '10px' }}>
                {
                  users
                }
              </ul>
              <div>
                <hr />
                <h1>Add User</h1>
                <br />
                <form className="page" onSubmit={this.handleSubmit}>
                  <label>First Name: </label>
                  <input
                    name="firstName"
                    type="text"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Last Name: </label>
                  <input
                    name="lastName"
                    type="text"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Email: </label>
                  <input
                    name="email"
                    type="text"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Password: </label>
                  <input
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Shipping Address: </label>
                  <textarea
                    name="shippingAddress"
                    value={this.state.shippingAddress}
                    cols="35"
                    rows="5"
                    onChange={this.handleChange}
                  />
                  <br />
                  <label>Phone Number: </label>
                  <input
                    name="phoneNumber"
                    type="text"
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                  />
                  <label>Admin: </label>
                  <select onChange={this.handleChange} name="isAdmin" >
                    <option defaultValue="Choose one"  value={false}>No</option>
                    <option defaultValue="Choose one" value={true}>Yes</option>
                  </select>
                  <br />
                  <br />
                  <button type="submit" >Add</button>
                </form>
              </div>
            </div>
        }
      </div>
    )
  }
}

const mapDispatch = dispatch => {
  return {
    getUsers: users => dispatch(getAllUsers(users)),
    addUser: user => dispatch(addNewUser(user)),
    // deleteUser: id => dispatch(deleteUserThunk(id))
  }
}

const mapState = ({ allUsers, causes, user }) => {
  return { allUsers, causes, user }
}

export default connect(mapState, mapDispatch)(AdminUsers)
