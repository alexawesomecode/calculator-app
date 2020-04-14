
import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="panel">
    <div className="group-1">
      <Button name="AC" />
      <Button name="plus-minus" />
      <Button name="percent" />
      <Button name="division" />
    </div>
    <div className="group-2">
      <Button name="7" />
      <Button name="8" />
      <Button name="9" />
      <Button name="X" />
    </div>
    <div className="group-3">
      <Button name="4" />
      <Button name="5" />
      <Button name="6" />
      <Button name="minus" />
    </div>
    <div className="group-4">
      <Button name="1" color="whitesmoke" />
      <Button name="2" color="whitesmoke" />
      <Button name="3" color="whitesmoke" />
      <Button name="plus" color="yellow" />
    </div>
    <div className="group-5">
      <Button name="0" wide color="whitesmoke" />
      <Button name="dot" />
      <Button name="equal" />
    </div>

  </div>
);

export default ButtonPanel;
