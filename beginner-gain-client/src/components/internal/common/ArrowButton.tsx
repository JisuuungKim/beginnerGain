import React from 'react';

import Arrow from 'public/assets/svg/arrow.svg';

export interface IButton {
  title: string;
}

const ArrowButton = ({ title }: IButton) => {
  return (
    <>
      <button
        className="bg-black text-white rounded-full w-72 flex items-center justify-between px-5 text-xs font-medium"
        style={{
          height: '48px',
        }}
      >
        {title}
        <Arrow />
      </button>
    </>
  );
}

export default ArrowButton;