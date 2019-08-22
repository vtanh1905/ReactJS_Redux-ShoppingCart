import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Notify extends Component {
    render() {
        const {notify} = this.props;
        return (
            <div className="alert alert-success" role="alert" id="mnotification">{notify}</div>
        )
    }
}

const mapStateToProps = (state) => ({
    notify : state.notify
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Notify)
