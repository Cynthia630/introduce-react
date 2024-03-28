// import logo from './logo.svg';
// import './App.css';
import React from "react";

//class组件
// class App extends React.PureComponent{
//   //1、给方法调用bind规定this  2、写成箭头匿名函数  3、方法本身写成箭头函数
//   f1() {
//     console.log(this)   //this默认指向undefind,返回值为undefind，故点击123后没有效果
//     return function () {
//       console.log("1")   //加return之后，就有了返回值，故点击后打印1
//     }
//   }

//   // 事件对象
//   // f1(a,b,event) {
//   //并不是原生的事件对象，而是合成的
//   //   console.log(event)  //事件对象在最后一个参数
//   // }

//   // state={
//   //   a:0
//   // }

//   state = {
//     arr:[1,2,3]
//   }
//   addArr=()=>{
//     this.state.arr.push(4);
//     this.setState({
//       arr:this.state.arr
//     })
//   }
//   render() {
//     return <div >
//       <div onClick={this.f1()}>123</div>
//       {/* 用bind方法，则this指向bind中的this，即指向App组件 */}
//       <div onClick={this.f1.bind(this)}>bind方法</div>  
//       {/* 箭头函数改变this指向，可使其指向App组件 */}
//       <div onClick={() => { console.log(this) }}>箭头函数</div> 
//       {/* this默认指向underfind,函数不能改变this指向 */}
//       <div onClick={function () { console.log(this) }}>匿名函数</div>

//       {/* 事件对象 */}
//       <div onClick={this.f1.bind(this,1,2)}>事件对象传参数</div> 

//       {this.state.a}

//       <div>
//         {this.state.arr}
//       </div>
//       <button onClick={this.addArr}>添加数组</button>
//     </div>
//   }
// }
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
