import React,{useEffect, useState} from 'react';
 
 let dologin = () =>{
    alert("do login clicked...")
 }

 type Person = {
    name:string;
    email?:string;

 }
 export function TimerApp({name,email}:Person) {
   //hook associate value with Dom instance of gui
  const [count,setCount] = useState(0);
  const [intervalRef,setIntervalRef] = useState<any>(0);

  useEffect(()=>{
     
    resumeTimer()
  },[]);
   
  const resumeTimer = () => {
    clearTimer()
    let intervalCode:any = setInterval(increment,1000);
    setIntervalRef(intervalCode)
  }
  const clearTimer = ()=>{
    clearInterval(intervalRef)
  }
  const resetTimer = ()=>{
    setCount(0);
  }
     
   const increment = () =>{
     setCount((preVal)=>(preVal+1));
     console.log("count increment" +count)
      
}
const Decrement = () =>{
    setCount(count-1);
    console.log("count decrement" +count)
}
 
    return (
    <div className="App">
      <h1>Timer App Using Function</h1>
      <h2>count: {count}</h2>
      <h2>name:{name}</h2>

       
      <button onClick={increment}>Increment</button>&nbsp;&nbsp;
      <button onClick={Decrement}>Decrement</button><br/><br/>
      <button onClick={clearTimer}>Stop Timer</button><br/><br/>
      <button onClick={resumeTimer}>Resume Timer</button><br/><br/>
      <button onClick={resetTimer}>Reset timer</button><br/><br/>
      
    </div>
  );
}

type MyProps = {
    name:string;
  
};
type MyState = { 
    count:number;
    intervalRef :  any;
}

export class TimerAppClass extends React.Component <MyProps,MyState>{
    //mounting 
    intervalRef : any = 0;
UNSAFE_componentWillMount(){
    
}

    componentDidMount(){
         console.log("componentDidMount")
         clearInterval(this.state.intervalRef)
         this.intervalRef =  setInterval(this.increment,1000)
     }
     resetTimer = ()=>{
        this.setState({count:0})
     }
     stopTimer = () =>{
        clearInterval(this.state.intervalRef)
     }
     resumeTimer = () =>{
        clearInterval(this.state.intervalRef)
        this.intervalRef =  setInterval(this.increment,1000)
     }
     increment = () =>{
         this.setState({count:(this.state.count+1) })
     }
     Decrement = () =>{
        this.setState({count:(this.state.count-1) })
    }
     state :MyState={
        count:0,
        intervalRef : 0
     };

     render(){
        console.log(">>render /mounting");
        return (
            <div className="App">
            <h5>Timer App Using Class</h5>
              <h5>User Name {this.props.name}</h5>
              <h5>Counter {this.state.count}</h5>
              <button onClick={this.increment}>Increment</button>&nbsp;&nbsp;
              <button onClick={ this.Decrement}>Decrement</button><br/><br/>
              <button onClick={ this.stopTimer}>Stop Timer</button><br/><br/>
              <button onClick={ this.resumeTimer}>Resume Timer</button><br/><br/>
              <button onClick={ this.resetTimer}>Reset Timer</button><br/><br/>
            </div>
          );
     }
}
// export default CustomerApp;