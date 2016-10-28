// React
var React = require('react');
var ReactDOM = require('react-dom');

// Sample data
var SampleData = require('./movie-data');           // SampleData.movies
var LotsMoreMovies = require('./lots-more-movies'); // LotsMoreMovies.movies

var MovieList = React.createClass({
  render: function() {
    return (
      <div className="movies col-sm-8">
        <div className="row">
          {this.props.movies.map(function(movie) {
            return (
              <Movie poster={movie.poster}
                     title={movie.title}
                     genre={movie.genre}
                     runtime={movie.runtime} />
            )
          })}
        </div>
      </div>
    )
  }
})

var Movie = React.createClass({
  render: function() {
    return (
      <div className="col-sm-2">
        <div className="thumbnail">
          <img className="img-responsive" src={this.props.poster} />
          <div className="caption">
            <h3>{this.props.title}</h3>
            <p>{this.props.genre}</p>
            <p>{this.props.runtime}</p>
          </div>
        </div>
      </div>
    )
  }
})

var App = React.createClass({
  loadMoreMoviesClicked: function() {
    var existingMovies = this.state.movies
    var newMoviesToAdd = LotsMoreMovies.movies
    var allTheMovies = existingMovies.concat(newMoviesToAdd)
    this.setState({
      movies: allTheMovies
    })
  },
  getInitialState: function() {
    return {
      movies: SampleData.movies
    }
  },
  render: function() {
    return (
      <div>
        <div className="header row">
          <div className="col-sm-9">
            <h1>Buyflix</h1>
          </div>
          <div className="hello col-sm-3 text-center">
            <h2>Hi, {this.props.name}!</h2>
          </div>
        </div>
        <div className="sort row">
          <div className="col-sm-12">
            <ul className="nav nav-pills">
              <li className="active"><a href="#">Latest Releases</a></li>
              <li><a href="#">A-Z</a></li>
              <li className="nav-text pull-right">{this.state.movies.length} movies</li>
            </ul>
          </div>
        </div>
        <div className="main row">
          <MovieList movies={this.state.movies} />
          <div className="details col-sm-4">
            <h3><a href="#" className="btn btn-success" onClick={this.loadMoreMoviesClicked}>Load more movies!</a></h3>
            <div className="row">
              <div className="col-sm-6">
                <img className="poster img-responsive" src="http://ia.media-imdb.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg" />
              </div>
              <div className="col-sm-6">
                <h3>Star Wars: The Force Awakens</h3>
                <p className="rating">PG-13</p>
                <p><strong>Genre:</strong> Action, Adventure, Fantasy</p>
                <p><strong>Runtime:</strong> 135 mins</p>
                <p><strong>Released:</strong> 12/18/15</p>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <h4>Summary</h4>
                <p>Three decades after the defeat of the Galactic Empire, a new threat arises. The First Order attempts to rule the galaxy and only a ragtag group of heroes can stop them, along with the help of the Resistance.</p>
                <h4>Cast</h4>
                <p>Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

ReactDOM.render(
  <App name="Brian" />,
  document.getElementById("app")
)
