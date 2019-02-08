import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




import React from 'react';
import ReactDOM from 'react-dom';


const Button = (props) => (
  <button onClick={props.handler}> {props.text} </button>
);

const Display = (props) => (
  <div> {props.count} </div>
);

const Form = (props) => (
  <form>
    <input value={props.value} onChange={props.changeHandler}/>
    <button onClick={props.submitHandler}> submit </button>
  </form>
);

class App extends React.Component{
  state = {
    count: 0,
    input: ''
  }
  
  handleClick = () => {
      this.setState({ count: this.state.count + 1 })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({count: this.state.input})
  }

   handleChange = (event) => {
    this.setState({ input: event.target.value });
  };

  render(){
    return(
      <div>
        <Display count={this.state.count} />
        <Button 
          text='Click Here'
          handler={this.handleClick} 
        />
        <Form 
          submitHandler={this.handleSubmit} 
          changeHandler={this.handleChange}
          value={this.state.input}
        />
      </div>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
