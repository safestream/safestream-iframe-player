import React, { Component } from 'react';

class Error extends Component {

  render() {
    const { show, message, ...props } = this.props;
    return (
      <div>
        {show ? (
          <div className="error">
            <span>{message}</span>
            </div>
        ) : null}
      </div>
    );
  }
}

export default Error;
