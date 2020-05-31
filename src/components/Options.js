import React from 'react';
import Option from './Option';

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className='widget-header__title'>Your Options</h3>
      <button
        className="button button--link"
        onClick={props.handleClearOptions}
      >
        Clear Options
      </button>
    </div>
    {props.options.length === 0 && 
      <p className='widget__message'>Add an option to get started!</p>}
    {props.options.map((option, i) => {
      return (
        <Option
          count={i+1}
          key={i}
          text={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      );
    })}
  </div>
);

export default Options;
