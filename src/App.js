import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberFormat from 'react-number-format';



function phoneformat2(value) {
  const val = value.replace(/[^\d]/g, '');
  return "+1"+val;

}

function phoneformat1(value) {
  const val = value.replace(/[^\d]/g, '');
  if (val.length < 3) {
      return val
  }
  if (val.length >10) {
      return val
  }
  if (val.length <= 6) {
      return  '('+val.slice(0, 3) + ') ' + val.slice(3)
  }
  if (val.length <= 10)
  return '('+val.slice(0, 3) + ') ' + val.slice(3, 6) + '-' + val.slice(6, 10)
}



class App extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) {
        this.setState({value: event.target.value});
    }


    render() {
      return (
          <form onSubmit={this.handleSubmit}>
              <NumberFormat  style={{marginLeft :10, lineHeight:'25px',fontSize:'18px' , outline: 0,borderBottomColor: '#00b8e6',  borderTopColor: 'transparent' ,borderRightColor: 'transparent' ,borderLeftColor: 'transparent',
                  bordeBottom: '1px'}} onChange={this.handleChange} value={this.state.value} format={phoneformat1}/>
              <div  style={{marginLeft :10,marginTop :10 , fontSize:'18px' }}>  <label  style={{fontWeight :'bold', fontSize:'18px'}} >Value:
        </label><NumberFormat value={this.state.value}   displayType={'text'}  format={phoneformat2}/></div>
      </form>
    );
}
}


export default App;
