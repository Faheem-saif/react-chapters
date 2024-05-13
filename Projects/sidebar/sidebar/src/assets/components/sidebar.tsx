

const Sidebar = () => {
  return (
    <div >
  <div id="nav-bar">
  <input id="nav-toggle" type="checkbox" />
  <div id="nav-header">
    <a id="nav-title" href="https://codepen.io" target="_blank">
      S<i className="fab fa-codepen" />
    IDEBAR
    </a>
    <label htmlFor="nav-toggle">
      <span id="nav-toggle-burger" />
    </label>
    <hr />
  </div>
  <div id="nav-content">
    <div className="nav-button">
      <i className="fas fa-palette" />
      <span>Your Work</span>
    </div>
    <div className="nav-button">
      <i className="fas fa-images" />
      <span>Assets</span>
    </div>
    <div className="nav-button">
      <i className="fas fa-thumbtack" />
      <span>Pinned Items</span>
    </div>
    <hr />
    <div className="nav-button">
      <i className="fas fa-heart" />
      <span>Following</span>
    </div>
    <div className="nav-button">
      <i className="fas fa-chart-line" />
      <span>Trending</span>
    </div>
    <div className="nav-button">
      <i className="fas fa-fire" />
      <span>Challenges</span>
    </div>
    <div className="nav-button">
      <i className="fas fa-magic" />
      <span>Spark</span>
    </div>
    <hr />
    <div className="nav-button">
      <i className="fas fa-gem" />
      <span>Zafeer1</span>
    </div>
    <div id="nav-content-highlight" />
  </div>
  <input id="nav-footer-toggle" type="checkbox" />
  <div id="nav-footer">


  </div>
</div>
       
           
        </div>
      
   
  )
}

export default Sidebar
