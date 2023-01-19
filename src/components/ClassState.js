import React, { Component } from 'react'
import Loading from '../components/Loading';
import '../App.css';

const SECURITY_CODE = "pollos";

export class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            error: false,
            loading: false,
            rightValue: false,
        }
    }
    // estados compuestos imperativos
    componentDidUpdate() {
        console.log("updating")
        if (this.state.loading) {
            setTimeout(() => {
                console.log("make validation");
                if (SECURITY_CODE === this.state.value) {
                    this.setState({ error: false, loading: false, rightValue: true, value: "" })
                } else {
                    this.setState({ error: true, loading: false, value: "" })
                }
                console.log("finish validation");
            }, 3000)
        }
    }

    render() {
        const { value, error, loading, rightValue } = this.state;
        return (
            <div className="useClass">
                <h2>Eliminate {this.props.name}</h2>
                <p>Write down the security code please</p>
                {(error && !loading) && (
                    <p>Error: codigo incorrecto</p>
                )}
                {rightValue && (
                    <p>Right Code</p>
                )}
                {loading && (
                    <Loading />
                )}
                <input
                    value={value}
                    onChange={(e) => {
                        this.setState({ value: e.target.value })
                    }}
                    placeholder='"Security code' />
                <button
                    onClick={() => this.setState({ loading: true })}>
                    Check out
                </button>
            </div>
        )
    }
}
