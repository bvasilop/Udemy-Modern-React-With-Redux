import React from 'react';

class NewComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Bill"
    }

  }
  render() {
    const {name} = this.state;
    const something = 10;
    return (
      <div>New component content {name}
        <div>New component content {something}</div>

      </div>
    );
  }
}
export default NewComponent;
