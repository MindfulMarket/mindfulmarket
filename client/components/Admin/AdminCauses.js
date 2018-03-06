import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import { Link } from 'react-router-dom'
import { postCauseThunk, deleteCauseThunk } from '../../store';


/* -----------------    COMPONENT     ------------------ */
export class AdminCauses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      imageUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addCause(this.state);
    this.setState({
      name: '',
      description: '',
      imageUrl: ''
    })
  }

  handleDelete(id) {
    event.preventDefault();
    this.props.deleteCause(id)
  }

  render() {
    let causes;

    if (this.props.causes) {
      causes = this.props.causes.map(cause => {
        return (
          <li key={cause.id}>
            <Link to={`/admin/causes/${cause.id}`}>{cause.name} <button>Edit</button>
            </Link>
            <button onClick={() => this.handleDelete(cause.id)}>delete </button>
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
              <h1>Causes</h1>
              <ul style={{ fontSize: '22px', marginBottom: '10px' }}>
                {
                  causes
                }
              </ul>
              <div>
                <hr />
                <h1>Add Cause</h1>
                <br />
                <form onSubmit={this.handleSubmit}>
                  <label>Name: </label>
                  <input
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Description:</label>
                  <textarea
                    name="description"
                    value={this.state.description}
                    cols="35"
                    rows="5"
                    onChange={this.handleChange}
                    required
                  />
                  <br />
                  <label>Image Url:</label>
                  <input
                    name="imageUrl"
                    value={this.state.imageUrl}
                    type="text"
                    onChange={this.handleChange}
                    required
                  />
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
    addCause: newCause => dispatch(postCauseThunk(newCause)),
    deleteCause: id => dispatch(deleteCauseThunk(id))
  }
}

const mapState = ({ causes, user }) => {
  return { causes, user }
}

export default connect(mapState, mapDispatch)(AdminCauses)
