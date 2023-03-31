import React from 'react';
import ReactDOM from 'react-dom';


type Customer ={
    name:string;
    email:string;
    phone:string;
    address:string;
    id:number ;
}
type CustomerState={
    items:Customer[],
    name:string;
    email:string;
    phone:string;
    address:string;
    id:number ;
}

const nextId =(itemArray:Customer[]):number=>{
    if(itemArray.length===0){
        return 1;
    }
    const arrayNumbers:number[] = itemArray.map((item)=>(item.id));
    let max = Math.max(...arrayNumbers)
    return max+1
    
}

export class CustomerAppC extends React.Component {
   state : CustomerState = {items:[
    {id:1,name:'Rasheda',email:'rasheda@gmail.com',phone:'123456',address:'india'},
    {id:2,name:'Zaid',email:'zaid@gmail.com',phone:'123456',address:'india'}
  ],name: '',email:'',phone:'',address:'',id:0};

 
  render() {
    return (
      <div>
        <h3>Customer App</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Name'
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          /><br/><br/>
           <input
            placeholder='Email'
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          /><br/><br/>
           <input
            placeholder='Phone'
            name="phone"
            onChange={this.handleChange}
            value={this.state.phone}
          /><br/><br/>
           <input
            placeholder='Address'
            name="address"
            onChange={this.handleChange}
            value={this.state.address}
          /><br/><br/>
          <button>Add</button> &nbsp;&nbsp;
          <input type='button' value="Cancel" /> 
        </form>
        <CustomerList items={this.state.items} doDelete={this.doDelete}  />
      </div>
    );
  }

  doDelete = (id:any)=>{
    console.log("delete id "+id);
    const temp = this.state.items.filter((item)=>(item.id!== id));
    this.setState({items:temp});
  }


  handleChange = (e:any) => {
    this.setState({ [e.target.name]: e.target.value } );
     
  }

  handleSubmit = (e:any) => {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    const newItem = {
      name: this.state.name,
      email:this.state.email,
      phone:this.state.phone,
      address:this.state.address,
      id:nextId(this.state.items)
    };
    this.setState((prevState:CustomerState) => ({
      items: prevState.items.concat(newItem),
      name: '',
      email: '',
      phone: '',
      address: '',
      id:0

    }));
  }
}

type CustomerListProps = {
    items:Customer[];
    doDelete:Function
     
};

//Child component
function CustomerList ({items}:CustomerListProps) {
    return (
         
            <table>
                <thead> 
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
          <tr key={item.id}>
            <td> {item.id}</td>
            <td> {item.name}</td>
            <td> {item.email}</td>
            <td> {item.phone}</td>
            <td> {item.address}</td>
            <td><button onClick={()=>{console.log(item.id)}}>Edit</button>  </td>
            <td> <button onClick={()=>{}}>Delete</button>  </td>
            
             </tr>
          
        ))}
                </tbody>
            </table>
       
       
    );
}
