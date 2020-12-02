export function DestinationForm(props) {
    const state = {value: ''};
    const handleChange = (event) => {
        this.setState({value: event.target.value});
      }
    
      const handleSubmit = (event) => {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
      
    return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      )
  }

