import { h, Component } from 'preact';
import Autocomplete from './Autocomplete'
import animals from './animals.json'

export default class App extends Component {
  state = {
    selectedItem: ''
  }
  render() {
    return (
      <div id="app" style={{ padding: '20px' }}>
        <h1>Preact Downshift Autocomplete Component</h1>
        <Autocomplete
          placeholder='Search for an animal'
          items={animals}
          onChange={selectedItem => this.setState({ selectedItem })}
        />
        {!!this.state.selectedItem &&
          <h3>Selected: {this.state.selectedItem}</h3>
        }
      </div>
    );
  }
}
