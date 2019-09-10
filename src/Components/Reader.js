/* eslint-disable no-shadow */
import React, { Component } from 'react';
import styles from './Reader.module.css';
import items from './publications.json';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

export default class Reader extends Component {
  constructor(items) {
    super(items);
    this.state = {
      counter: 1,
      backBtnDisabled: true,
      forvardBtnDisabled: false,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1,
      backBtnDisabled: prevState.counter === 1 && !prevState.backBtnDisabled,
      forvardBtnDisabled:
        prevState.counter === items.length - 1 && !prevState.forvardBtnDisabled,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1,
      backBtnDisabled: prevState.counter === 2 && !prevState.backBtnDisabled,
      forvardBtnDisabled:
        prevState.counter === items.length && !prevState.forvardBtnDisabled,
    }));
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { counter } = this.state;
    const { backBtnDisabled, forvardBtnDisabled } = this.state;
    return (
      <div className={styles.reader}>
        <Publication currentItem={counter} items={items} />
        <Counter currentItem={counter} items={items} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          backBtnDisabled={backBtnDisabled}
          forvardBtnDisabled={forvardBtnDisabled}
        />
      </div>
    );
  }
}
