import React from "react";

class Home extends React.Component {
  render() {
      const {username} = this.props.match.params;
    return (
        <div>
            <h3>Hello {username}</h3>
        </div>
    );
  }
}

export default Home;