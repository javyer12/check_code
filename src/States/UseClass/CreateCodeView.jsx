// import React, { Component } from 'react'

// export default class extends Component {
//     render() {

//         return (
//             <div className='animated_class'>
//                 <h3>ClassState!</h3>
//                 <div className="class_state__view">
//                     <h2>Eliminate {this.props.name}</h2>
//                     <p>Write down the security code please</p>
//                     {(error && !loading) && (
//                         <p>Error: codigo incorrecto</p>
//                     )}
//                     {rightValue && (
//                         <p>Right Code</p>
//                     )}
//                     {loading && (
//                         <Loading />
//                     )}
//                     <input
//                         value={value}
//                         onChange={(e) => {
//                             this.setState({ value: e.target.value })
//                         }}
//                         placeholder='"Security code' />
//                     <button
//                         className='btn_create'
//                         placeholder='Create'
//                         onClick={() => this.setState({ loading: true })}>
//                         Check out
//                     </button>
//                 </div>
//             </div >
//         )
//     }
// }

// //   // <div className="useClass">
// //                 //     <h3>ClassState!</h3>
// //                 //     <div className="class_state__view">
// //                 //         <h2>Eliminate {this.props.name}</h2>
// //                 //         <p>Write down the security code please</p>
// //                 //         {(error && !loading) && (
// //                 //             <p>Error: codigo incorrecto</p>
// //                 //         )}
// //                 //         {rightValue && (
// //                 //             <p>Right Code</p>
// //                 //         )}
// //                 //         {loading && (
// //                 //             <Loading />
// //                 //         )}
// //                 //         <input
// //                 //             value={value}
// //                 //             onChange={(e) => {
// //                 //                 this.setState({ value: e.target.value })
// //                 //             }}
// //                 //             placeholder='"Security code' />
// //                 //         <button
// //                 //             className='btn_create'
// //                 //             placeholder='Create'
// //                 //             onClick={() => this.setState({ loading: true })}>
// //                 //             Check out
// //                 //         </button>
// //                 //     </div>
// //                 // </div>