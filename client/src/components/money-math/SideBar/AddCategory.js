import React from 'react';
import { connect } from 'react-redux'
import { FaCheck } from 'react-icons/fa'
import { startAddCategory } from '../../../actions/categoryAction'

class AddCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            nameError: ''
        }
    }
    handleChange = e => {
        this.setState({
            name: e.target.value
        })
    }
    handleSubmit = () => {
        const formData = {
            name: this.state.name,
            type: this.props.type
        }
        if(this.state.name) {
            this.props.dispatch(startAddCategory(formData))
            this.props.handleAddForm('AC-form', 'none')
            this.setState({ name: ''})
        } else {
            this.setState({ nameError: '* Field required.'})
        }
    }
    render() {
        const style = this.state.nameError ? { borderColor: 'red' } : {}
        return (
            <div id="AC-form" style={style} >
                <input placeholder="Enter new category" value={ this.state.name } onChange={ this.handleChange } />
                <button type="button" onClick={ this.handleSubmit } ><FaCheck /></button>
            </div>
        )
    }
}

export default connect()(AddCategory)