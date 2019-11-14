import React from 'react';
import './App.css';
import MovieCard from './components/movieCard';
import Modal from './components/Modal';
import { connect } from 'react-redux';
import * as ActionCreators from './store/action_creators';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieList: [],
      watched:{},
      isShownModal: false,
      idModal: null,
      isLoading: false,
    }
  }

  handleClick = (id) => {
    this.setState((prevState)=>{
      let newVal = !prevState.watched[id];
      return {watched:{
        ...prevState.watched,
        [String(id)]: newVal,
      }}
      
    });
  }

  componentDidMount(){
    this.props.getMovies();
  }

/*   componentDidMount(){
    const movies = fetch('https://api.tvmaze.com/search/shows?q=batman');
    movies
      .then(data => data.json())
      .then(data => {
        //this.setState({movieList: data})
        this.props.updateMovies(data);
      }).catch(e =>{
        console.log("Error while loading data", e);
      })
  }
 */
  showModal = (id) => {
    let movies = [...this.props.movieList];
    let curId = movies.find(elem => { 
      return elem.show.id == id});
    
    this.props.updateViewId(id);
  }

  closeModal = () => {
    document.body.classList.remove('modal-open');
    this.setState((prevState) => ({
      ...prevState,
      isShownModal: false,
    }))
  }
  renderCard = (item) =>{
    const cardInfo = {
      imgURL: item.show.image.medium,
      title: item.show.name,
      description: item.show.summary,
      href: item.show.url,
      id: item.show.id,
    }
    return(
      <MovieCard 
        key = {cardInfo.id}
        imgURL= {cardInfo.imgURL}
        title = {cardInfo.title}
        description= {cardInfo.description}
        href={cardInfo.href}
        onClick = { this.handleClick }
        watched = { this.props.watched[cardInfo.id] }
        id = { String(cardInfo.id) }
        handleModal = { this.showModal }
      />
    )
  }

  render(){
    const cards = this.props.movieList.map(item => this.renderCard(item))
    return (
      <div className="container">
        <div className="row">
          { cards }
        </div>
        {
          this.props.isShownModal && <Modal key="modalKey" 
                                      onClick={ this.closeModal } 
                                      isShownModal = { this.props.isShownModal }
                                       data = {this.props.idModal}>
                                       { this.renderModalBody(this.props.viewId) }
                                    </Modal>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieList: state.app.movieList, 
    watched: state.app.watched,
    viewId: state.app.viewId,
  }
}

function mapDispatchToProps(dispatcher){
  return{
    //updateMovies: (payload) => dispatcher(ActionCreators.updateMovies(payload)),
    getMovies: (payload) => dispatcher(ActionCreators.getMovies(payload)),
    updateViewId: (payload) => dispatcher(ActionCreators.updateViewId(payload)),
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(App);

export default connected;
