import React from 'react';


class SubscribeForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      firstName: '',
      lastName: '',
      email: '',
      state: '',
      schoolType: '',
      schoolSchedule: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(e) {
    e.preventDefault();
    let data = this.state

    fetch('/user', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(data)
    });
    alert('you made an user!')
  }
  render(){
    return (
        <div>
            <Button
                onSubmit={this.handleSubmit}
            />
        </div>
    );
  }
}
export default SubscribeForm;