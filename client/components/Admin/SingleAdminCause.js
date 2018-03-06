import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editCauseThunk, deleteCauseThunk } from '../../store';
import { Link } from 'react-router-dom';

/* -----------------    COMPONENT     ------------------ */

class SingleAdminCause extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = Number(this.props.match.params.id)
        const causeEdited = {};
        for (let field of event.target) {
            if (field.value) causeEdited[field.name] = field.value
        }
        this.props.editCause(causeEdited, id)
    }

    handleDelete(event) {
        event.preventDefault();
        this.props.deleteCause(Number(this.props.match.params.id))
        this.props.history.push('/admin/causes')
    }

    render() {
        let cause = this.props.cause;
        return (
            <div>
                {
                    !cause
                        ? ''
                        :
                        <div>
                            {
                                !this.props.user.isAdmin
                                    ? <h1>Not Authorized</h1>
                                    :
                                    <div>
                                        <div className="page">
                                            <Link to={'/admin/causes'}><h1>Return to Causes</h1></Link>
                                            <h1>Edit: {cause.name} Cause</h1>
                                            <ul>
                                                <li>Cause Name: {cause.name}</li>
                                                <li>Cause Description: {cause.description}</li>
                                                <li>Image: <img src={cause.imageUrl} /></li>
                                                <li>Cause ImageUrl: {cause.imageUrl}</li>
                                            </ul>
                                        </div>
                                        <form className="page" onSubmit={this.handleSubmit}>
                                            <label>Name:</label>
                                            <input
                                                name="name"
                                                type="text"
                                                defaultValue={cause.name}
                                            />
                                            <br />
                                            <label>Description:</label>
                                            <textarea
                                                name="description"
                                                cols="35"
                                                rows="5"
                                                defaultValue={cause.description}
                                            />
                                            <br />
                                            <br />
                                            <label>Image Url:</label>
                                            <input
                                                name="imageUrl"
                                                type="text"
                                                defaultValue={cause.imageUrl}
                                            />
                                            <br />
                                            <br />
                                            <button type="submit">Edit {cause.name}</button>
                                        </form>
                                        <div className="page">
                                            <h3>{`Need to delete the ${cause.name} cause`}</h3>
                                            <button
                                                onClick={this.handleDelete}
                                            >Delete {cause.name}</button>
                                        </div>
                                    </div>
                            }
                        </div>
                }
            </div>

        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapDispatch = dispatch => {
    return {
        editCause: (changedCause, id) => dispatch(editCauseThunk(changedCause, id)),
        deleteCause: (id) => dispatch(deleteCauseThunk(id))
    }
};
const mapState = ({ causes, user }, ownProps) => {
    return { cause: causes.find(cause => cause.id === Number(ownProps.match.params.id)), user }
}

export default connect(mapState, mapDispatch)(SingleAdminCause);
