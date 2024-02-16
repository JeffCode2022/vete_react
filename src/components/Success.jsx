import React, { useState, useEffect } from 'react';

function Success({children, duration = 5000}) {
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
    <div className={`bg-green-100 border-l-4 border-green-500 text-green-700 p-4 text-center mb-5 ${isVisible ? '' : 'hidden'}`}>
      {children}
    </div>
  )
}

export default Success
