import React from 'react';
import EventMixin from '../src/index';
import ReactMixin from 'react-mixin';

class Test extends React.Component {
  constructor() {
    super();
    this.lid = 0;
    this.listener = (lid) => {
      return (value) => {
        this.cache += lid + ':' + value + '\n';
      };
    };
    this.state = {
      content: ''
    };
    this.trigger = this.trigger.bind(this);
    this.addListener = this.addListener.bind(this);
    this.removeListener = this.removeListener.bind(this);
  }
  trigger() {
    this.cache = '';
    this.fire('change', 'clicked');
    this.setState({
      content: this.cache
    });
  }
  addListener() {
    this.on('change', this.listener(++this.lid));
  }
  removeListener() {
    this.off('change');
  }
  render() {
    return (
      <div>
        <button onClick={this.trigger}>trigger</button>
        <button onClick={this.addListener}>Add a Listener</button>
        <button onClick={this.removeListener}>Remove a Listener</button>
        <div>{this.state.content}</div>
      </div>
    );
  }
}

ReactMixin(Test.prototype, EventMixin);

React.render(
  <Test/>,
  document.getElementById('demo')
);
