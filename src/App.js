import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenshots: []
    }
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/photos";
    fetch(url)
    .then(response => response.json())
    .then(json => this.setState({ screenshots: json }))
  }

  render() {
    const { screenshots } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">User screenshots</h1>
        </div>
        {screenshots.map((screenshot) => (
          <div className="card" key={screenshot.id}>
            <div className="card-header">
              #{screenshot.id} <strong>{screenshot.title}</strong>
            </div>
            <div className="card-body">
              <p className="card-text"><img src={screenshot.url}></img></p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default App;