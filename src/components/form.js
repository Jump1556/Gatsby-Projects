import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isGoing: false,
          ssn: ""
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange(event) {
        this.setState({ssn: event.target.value});
        console.log(this.state.ssn)
      }
    
       handleInputChange(event) {
         const target = event.target;
         const value = target.checked;
         console.log(value);
         this.setState({isGoing: value});
         console.log(this.state.isGoing)
         if (this.state.isGoing == true) {
            this.setState({ssn: ''});
         } 
       }

      handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.value, event);
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Is going:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Number of guests:
              <input
                name="ssn"
                type="tel"
                value={this.state.ssn}
                onChange={this.handleChange}
                disabled={!this.state.isGoing}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
  }

export default Form