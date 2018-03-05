import React, { Component } from 'react';
import { connect } from 'react-redux'
import AdminNav from './AdminNav'
import {Link} from 'react-router-dom'
import axios from 'axios'


/* -----------------    COMPONENT     ------------------ */
export class AdminCategories extends Component {
  constructor(props){
    super(props)
  }

  render() {
    console.log(this.props)
    let categories;

    if (this.props.categories) {

      categories = this.props.categories.map(category => {
        return (
          <li key={category.id}>
          <Link to={`/admin/categories/${category.id}`}>{category.name}
          </Link>
          </li>
        )
      })
    }

    return (
      <div>
      <h1>AdminCategories</h1>
      <ul>
      {
        categories
      }
      </ul>

      </div>
    )


  }
}

const mapState = ({ categories }) => {
  return { categories }
}
export default connect(mapState)(AdminCategories)

// <AdminNav />
