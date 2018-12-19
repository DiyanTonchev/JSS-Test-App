import React from 'react';
import { Text, RichText } from '@sitecore-jss/sitecore-jss-react';

const style = {
  counterContainer: {
    border: '1px solid black',
    borderRadius: 5,
    paddingLeft: 15,
    paddingBottom: 15
  },
  count: {
    margin: 5,
    fontWeight: 600,
    fontSize: 55
  },
  btn: {
    margin: 5
  }
}

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  incrementCount() {
    this.setState({
      count:
        this.state.count + 1
    })
  }

  decrementCount() {
    this.setState({
      count:
        this.state.count - 1
    })
  }

  render() {
    let { heading, content } = this.props.fields;
    return (
      <>
        <Text tag="h2" className="display-4" field={heading} />
        <RichText className="contentDescription" field={content} />
        <div style={style.counterContainer} className="counter-container">
          <div style={style.count}>{this.state.count}</div>
          <button style={style.btn} className="btn btn-primary" onClick={this.incrementCount}>Increment</button>
          <button style={style.btn} className="btn btn-primary" onClick={this.decrementCount}>Decrement</button>
        </div>
      </>
    );
  }
}

export default Counter;
