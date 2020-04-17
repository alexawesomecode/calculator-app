
import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = props => {
  const { clickHandler } = props;

  return (
    <div className="panel">
      <div className="group-1">
        <Button name="AC" handleClick={clickHandler} />
        <Button name="+/-" handleClick={clickHandler} />
        <Button name="%" handleClick={clickHandler} />
        <Button name="/" handleClick={clickHandler} />
      </div>
      <div className="group-2">
        <Button name="7" handleClick={clickHandler} />
        <Button name="8" handleClick={clickHandler} />
        <Button name="9" handleClick={clickHandler} />
        <Button name="x" handleClick={clickHandler} />
      </div>
      <div className="group-3">
        <Button name="4" handleClick={clickHandler} />
        <Button name="5" handleClick={clickHandler} />
        <Button name="6" handleClick={clickHandler} />
        <Button name="-" handleClick={clickHandler} />
      </div>
      <div className="group-4">
        <Button name="1" color="whitesmoke" handleClick={clickHandler} />
        <Button name="2" color="whitesmoke" handleClick={clickHandler} />
        <Button name="3" color="whitesmoke" handleClick={clickHandler} />
        <Button name="+" color="yellow" handleClick={clickHandler} />
      </div>
      <div className="group-5">
        <Button name="0" wide color="whitesmoke" handleClick={clickHandler} />
        <Button name="." handleClick={clickHandler} />
        <Button name="=" handleClick={clickHandler} />
      </div>

    </div>
  );
};

ButtonPanel.propTypes = {

  clickHandler: PropTypes.func.isRequired,

};
export default ButtonPanel;
