import React from 'react';
import './sortButton.css';

function SortButton({
  isActive,
  onClick,
  children,
  upArrowClick,
  downArrowClick,
}) {
  const [upArrowIsActive, setUpArrowIsActive] = React.useState();

  const upArrowClickHandler = () => {
    if (isActive) {
      setUpArrowIsActive(true);
    } else setUpArrowIsActive(false);
    upArrowClick();
  };

  const downArrowClickHandler = () => {
    if (isActive) {
      setUpArrowIsActive(false);
    } else setUpArrowIsActive(false);
    downArrowClick();
  };

  return (
    <div
      className={isActive ? 'sort-btn sort-btn_active' : 'sort-btn'}
      onClick={onClick}
    >
      <div className="sort-btn__text">{children}</div>
      <div className="sort-btn__arrows-container">
        <svg
          className={
            upArrowIsActive && isActive
              ? 'sort-bth__arrow sort-bth__arrow_active'
              : 'sort-bth__arrow'
          }
          onClick={upArrowClickHandler}
          width="9"
          height="6"
          viewBox="0 0 9 6"
          fill="#99a0a3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 4.24264L7.43934 5.3033L4.25736 2.12132L1.07538 5.3033L0.0147181 4.24264L4.25736 0L8.5 4.24264Z"
            fill="#99a0a3"
            stroke="#99a0a3"
          />
        </svg>
        <svg
          className={
            !upArrowIsActive && isActive
              ? 'sort-bth__arrow sort-bth__arrow_active'
              : 'sort-bth__arrow'
          }
          onClick={downArrowClickHandler}
          viewBox="0 0 9 7"
          fill="#99a0a3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.5 1.83245L7.43934 0.77179L4.25736 3.95377L1.07538 0.77179L0.0147181 1.83245L4.25736 6.07509L8.5 1.83245Z"
            fill="#99a0a3"
            stroke="#99a0a3"
          />
        </svg>
      </div>
    </div>
  );
}

export default SortButton;
