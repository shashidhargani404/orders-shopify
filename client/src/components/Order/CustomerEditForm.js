import React from 'react'
import { connect } from 'react-redux'

class CustomerEditForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            first_name: props.first_name || '',
            last_name: props.last_name || '',
            email: props.email || '',
            phone: props.phone ? props.phone.slice(3) : '',
            code: '+91',
            loading: false
        }
    }
    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            loading: true
        })
        const { first_name, last_name, email, phone } = this.state
        const formData = { first_name, last_name, email, phone: '+91' + phone } 
        this.props.handleSubmit(formData)
    }
    handleChange = e => {
        if(e.target.name === 'phone' && !isNaN(e.target.value) && e.target.value.length <= 10) {
            this.setState({
                phone: e.target.value    
            })
        } else if(e.target.name !== 'phone') {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    render() {
        const { first_name, last_name, email, phone, code, loading } = this.state
        const validFirstName = first_name.length > 2 ? "form-control is-valid" : "form-control"
        const validLastName = last_name.length > 2 ? "form-control is-valid" : "form-control is-invalid"
        const emailValidater = /\S+@\S+\.\S+/
        const validEmail = emailValidater.test(email) ? "form-control is-valid" : "form-control is-invalid"
        const validPhone = phone.length == 10 ? "form-control is-valid" : "form-control is-invalid"
        return (
            <div className="container p-4" style={{width: '500px'}}>
                <h4 className="mb-3">Edit Customer Details</h4>
                <hr/>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                        <label htmlFor="first_name">First name</label>
                        <input type="text" name="first_name" value={first_name} onChange={this.handleChange} className={validFirstName} id="first_name" aria-describedby="first_name" placeholder="First name" required />
                        { !first_name ? <p className="text-danger mt-2" style={{fontSize: '13px'}} >* First name NA</p>: ''}
                    </div>
                    <div className="form-group">
                        <label htmlFor="last_name">Last name</label>
                        <input type="text" name="last_name" value={last_name} onChange={this.handleChange} className={validLastName} id="last_name" aria-describedby="last_name" placeholder="Last name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={email} onChange={this.handleChange} className={validEmail} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address" required />
                        { !email ? <p className="text-danger mt-2" style={{fontSize: '14px'}} >* Email NA</p>: ''}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPhone">Phone</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text">{ code }</div>
                            </div>
                            <input type="phone" name="phone" value={phone} onChange={this.handleChange} className={validPhone} id="exampleInputPhone" placeholder="Enter mobile number" required />
                        </div>
                        { !phone ? <p className="text-danger mt-2" style={{fontSize: '14px'}} >* Phone number NA</p>: ''}
                    </div>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
                {
                    loading && (
                        <div className="d-flex justify-content-center" style={{ position: 'fixed', left: '50%', top: '39%'}}>
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default connect()(CustomerEditForm)