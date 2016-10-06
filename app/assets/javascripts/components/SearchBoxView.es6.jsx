class SearchBoxView extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // console.log('hey you just submitted a form');

    var movieTitle = this.refs.title.value
    console.log(movieTitle);

    $.ajax({
      url: 'http://www.omdbapi.com/?s='+{movieTitle}+'&y=&plot=short&r-json'
    })
     .done(function(response) {
        // console.log(response);
        // console.log(this.props.uponSearch);
        this.props.uponSearch(response);
     }.bind(this));
  }

  render() {
    return(
      <header id="top-nav">
        <div id="brand">OMDb API</div>
        <form id="search-form" onSubmit={this.handleSubmit}>
          <input id="search" ref="title" type="text" placeholder="Search Title"></input>
        </form>
        <i className="fa fa-search"></i>
      </header>
    );
  }
}
