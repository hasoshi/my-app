function Theme () {
    return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="container">
          <span style={{ color: darkMode ? "grey" : "red" }}>Light</span>
          <div className="switch-checkbox">
              <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
          <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>Dark</span>
        </div>
    </div>
    )
    
}
export default Theme;