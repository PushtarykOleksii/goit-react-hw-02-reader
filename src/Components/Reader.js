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
      counter: 0,
      backBtnDisabled: true,
      forvardBtnDisabled: false,
    };
  }

  handleIncrement = () => {
    this.setState(prevState => {
      const forvardBtnDisabled = prevState.counter === items.length - 2;

      let backBtnDisabled = false;
      if (this.backBtnDisabled && prevState.counter === 1) {
        backBtnDisabled = false;
      }
      return {
        counter: prevState.counter + 1,
        backBtnDisabled,
        forvardBtnDisabled,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      const backBtnDisabled = prevState.counter === 1;

      let forvardBtnDisabled = false;
      if (this.forvardBtnDisabled && prevState.counter === 10) {
        forvardBtnDisabled = false;
      }
      return {
        counter: prevState.counter - 1,
        backBtnDisabled,
        forvardBtnDisabled,
      };
    });
  };

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const currentItem = this.state.counter;
    const { backBtnDisabled, forvardBtnDisabled } = this.state;
    return (
      <div className={styles.reader}>
        <Publication currentItem={currentItem} items={items} />
        <Counter currentItem={currentItem} items={items} />
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
