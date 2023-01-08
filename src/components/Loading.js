import React, { Component } from 'react'

export default class Loading extends Component {
    componentDidMount() {
        console.log("didMount")
    }
    render() {
        return (
            <div>Loading</div>
        )
    }
}
