// import React, { Component } from 'react';
// import '../post.css';
// import uparrow from '../up-arrow.png';
// import downarrow from '../download.png';
// import Stars from './star'

// export class InnerboxComponent extends Comment{
//     render(){
//         const { body, title } = this.props;//???
//         return([
//             <div className='midbox'>
//                 <p>{this.props.body}</p>
//             </div>,
//             <div className='bottombox'>
//                 <div className='innerboxleft'>
//                     <p>{this.props.title}</p>
//                 </div>
//                 <div className='innerboxleft'>
//                     <p>{this.props.title}</p>
//                 </div>
//             </div>
//         ]);
//     }
// }
// export class Innerbox extends Component {
//     arrayFuncOfInnerbox(id){
//         let innerboxarray = [];
//         for (let i = 1; i <= id; i++) {//????????????
//             starComponents1.push(<InnerboxComponent
//                 key={i}
//                 body={this.props.body}
//                 title={this.props.title}
//             />)
//         }
//         return innerboxarray;
//     }
//     render(){
//         const{id}=this.props;//?????????????
//     return (this.arrayFuncOfInnerbox(id));
//     }
// }

// // export default class Stars extends Component {
// //     renderStars(startNum) {
// //         let starComponents1 = [];
// //         for (let i = 1; i <= startNum; i++) {
// //             starComponents1.push(<Star
// //                 key={i}
// //                 index={i}
// //                 identyifemptStar={this.props.litNum >= i}
// //                 go={this.props.gooooo}
// //             />)
// //         }
// //         return starComponents1;
// //     }
// //     render(){
// //         const { totalstarNum } = this.props;   
// //         return this.renderStars(totalstarNum);
// //     }

// export  default class Outbox extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             num: 1,
//             showcomment: false,
//         };}

//     render(){

//         return(
//         <div className='box'>
//             <div className='topbox'>
//                 <p>{this.props.title}</p>
//             </div>


//             <div className='midbox'>
//                 <p>{this.props.body}</p>
//                 <div className='starbox'>
//                     <Stars litNum={this.state.num} 
//                     totalstarNum={5} 
//                     gooooo={index=>this.setState({num:index})}
//                     />
//                 </div>
//             </div>


//             <div className='bottombox'>
//                 <div className='boxleft'>
//                     {this.state.showcomment? 
//                     <p>Sow Comments</p> : <p>Hide Comments</p>}
//                 </div>
//                 <div className='boxright'>
//                     {this.state.showcomment? 
//                     <img src={downarrow} alt='downarrow'
//                     onClick={this.setState({showcomment: true})} 
//                     height={20} width={20} /> : 
//                     <img src={uparrow} alt='uparrow'
//                     onClick={this.setState({showcomment: false})}
//                     height={20} width={20} />}
//                 </div>
//             </div>

//             <div className='hiddenbox'>

//                 <div className='innerbox'>
//                     <Innerbox id={this.props.id}/>
//                 </div>
//             </div>
//         </div>
//     );}
// }