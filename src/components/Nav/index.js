import React from "react";


class Nav extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <h1 className="text-success">Clicky Game</h1>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav mx-auto">
      <li className="nav-item ">
        <h3 className="nav-link text-success">Click an image to begin!</h3>
      </li>
</ul>
    <ul className="navbar-nav ml-auto">
      <li className="nav-item ">
        <h3 className="nav-link text-success">Score: {this.props.score} |</h3>
      </li>
      <li className="nav-item ">
        <h3 className="nav-link text-success">Top Score: {this.props.topscore}</h3>
      </li>
     
    </ul>
   
  </div>
</nav>
        )
    }

}
export default Nav;