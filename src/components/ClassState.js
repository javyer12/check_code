import React, { Component } from 'react'
import Loading from '../components/Loading';
import CreateCodeView from '../States/UseClass/CreateCodeView';

import '../App.css';
import '../styles/ClassState.css';

const SECURITY_CODE = localStorage.getItem('classCode');

export class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eliminated: false,
            value: "",
            error: false,
            loading: false,
            rightValue: false,
            code: false,
            updateCode: (name, keyword) => {
                localStorage.setItem(name, keyword)
            }
        }
        this.colorState = {
            value: "",
            true: 'red',
            false: 'blue'
        }
    }
    // estados compuestos imperativos
    componentDidUpdate() {
        if (this.state.loading) {
            setTimeout(() => {
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
        console.log(this.props.name);
        console.log(localStorage.getItem('classCode'))
        if (!this.state.code) {
            return (
                <div className='useClass'>
                    <div className='animated_class'>
                        <h3>ClassState!</h3>
                        <div className="class_state__view">
                            <h2>Create {this.props.name}</h2>
                            <p>Create your security code please</p>
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
                                // value={value}
                                minLength="3"
                                maxLength="6"
                                required
                                onChange={(e) => {
                                    this.state.updateCode('classCode', e.target.value)
                                }}
                                placeholder='Greater than 3  character and less than 6' />
                            <input
                                // value={value}
                                minLength="10"
                                maxLength="40"
                                required
                                onChange={(e) => {
                                    this.state.updateCode('classCodeDescription', e.target.value)
                                }}
                                placeholder='Greater than 9  character and less than 30' />
                            <button
                                className='btn_create'
                                placeholder='Create'
                                onClick={() => {
                                    let datum = localStorage.getItem('classCode');
                                    if (datum.length <= 3 || datum.length > 6) {
                                        return window.confirm('your code length must be between 3 and 6');
                                    } else {
                                        this.state.eliminated = true;
                                        this.state.code = true;
                                        console.log('got it')
                                    }
                                }}>
                                Check out
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
        else if (this.state.code) {
            return (
                <div className='useClass'>
                    <div className='animated_class'>
                        <h3>ClassState!</h3>
                        <div className="class_state__view">
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
                                className='btn_create'
                                placeholder='Create'
                                onClick={() => this.setState({ loading: true })}>
                                Check out
                            </button>
                        </div>
                    </div >
                </div>
            )
        } else {

            return (
                <div className='useClass'>equal</div>
            )
        }
    }
}
