import React, { useState, useEffect } from 'react';

function Error({ children, duration = 5000 }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return (
    <div className={`bg-red-100 border-l-4 border-red-500 text-red-700 p-4 text-center mb-5 ${isVisible ? '' : 'hidden'}`}>
      {children}
    </div>
  );
}

export default Error;
