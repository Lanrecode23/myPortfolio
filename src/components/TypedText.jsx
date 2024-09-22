import React from 'react';
import Typed from 'typed.js';
import '../css/hero.css'

function TypedText() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const options = {
        strings: [
            "<span class='dev-software'>I'm a software developer.</span>",
            "<span class='dev-front-end'>I'm a front-end developer.</span>",
            "<span class='dev-researcher'>I'm a researcher.</span>"
          ],
      typeSpeed: 50,
      backSpeed: 25, 
      backDelay: 1000, 
      startDelay: 500, 
      loop: true 
    };

    const typed = new Typed(el.current, options);

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="App typing">
      <span ref={el} />
    </div>
  );
}

export default TypedText;
