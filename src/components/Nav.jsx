import React, {useEffect, useState} from 'react'
import "../components/Nav.css"


function Nav() {

  const [handle, showHandle ] = useState(false)
  useEffect(() => {
      window.addEventListener('scroll', (event) => {
          if(window.scrollY > 0) {
              showHandle(true)
          } else {
              showHandle(false);
              window.removeEventListener('scroll')
          }
      })
  }, []);

  return (
    <div className={`nav ${handle && "nav__black"}`}>
        <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/250px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
        className="nav_logo"
      />
      <img
        className="nav_avatar"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
        alt="Netflix Logo"
      />
    </div>
  )
}

export default Nav