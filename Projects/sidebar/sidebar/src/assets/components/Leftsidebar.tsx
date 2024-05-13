
import "./leftsidebar.css"

const Leftsidebar = () => {
  return (
    < >

    <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
    <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
      <div className="spinner diagonal part-1" />
      <div className="spinner horizontal" />
      <div className="spinner diagonal part-2" />
    </label>
    <div id="sidebarMenu">
      <ul className="sidebarMenuInner">
        <li>
          Muhammad Zafeer 
        </li>
        <li>
          <a href="https://vanila.io" target="_blank">
            Company
          </a>
        </li>
        <li>
          <a href="https://instagram.com/plavookac" target="_blank">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com/plavookac" target="_blank">
            Twitter
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/channel/UCDfZM0IK6RBgud8HYGFXAJg"
            target="_blank"
          >
            YouTube
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/plavookac/" target="_blank">
            Linkedin
          </a>
        </li>
      </ul>
    </div>
    <div id="center" className="main center">
      
    </div>
  </>
  )
}

export default Leftsidebar
