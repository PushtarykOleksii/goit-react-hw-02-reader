import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const variant = classNames.bind(styles);

const Controls = ({
  onIncrement,
  onDecrement,
  backBtnDisabled,
  forvardBtnDisabled,
}) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={onDecrement}
      className={variant({
        button: true,
        buttonDisabled: backBtnDisabled === true,
      })}
    >
      Назад
    </button>
    <button
      type="button"
      className={variant({
        button: true,
        button_left: true,
        buttonDisabled: forvardBtnDisabled === true,
      })}
      onClick={onIncrement}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  backBtnDisabled: PropTypes.bool.isRequired,
  forvardBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
