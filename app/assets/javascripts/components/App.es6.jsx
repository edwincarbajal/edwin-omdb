class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
    this.onSearch = this.onSearch.bind(this)
  }

  onSearch(movie) {
    this.setState({movies: movie.concat(this.state.movies)})
    console.log(this.state.movies)
  }

  render() {
    return(
      <div>
        <SearchBoxView uponSearch={this.onSearch} />
        <section className="container">
          <Timeline  />
        </section>
      </div>
    );
  }
}
