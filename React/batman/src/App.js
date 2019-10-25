import React from 'react';
import './App.css';
import MovieCard from './components/movieCard'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        watched:{}
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

  render(){
    const ids = this.state.watched
    return (
      <div className="container">
        <div className="row">
          <MovieCard imgURL='https://vignette.wikia.nocookie.net/youngjustice/images/d/d1/Batman.png'
            title = 'Batman'
            description= 'Batman (real name Bruce Wayne) is a crime-fighter from Gotham City and a founding member of the Justice League. When Nightwing was still Robin, Batman was his mentor; since then, he has gone on to mentor several other protégés, including a new Robin and Batgirl. In 2018, he resigned, along with several others, from the Justice League out of frustration with the U.N. sanctions put on the organization by Secretary-General Lex Luthor. Since then, he has assembled and commands a new team, consisting of both former League and Team members as part of a new strategy to combat meta-human trafficking and the Light. On February 24, 2019, he rejoined the Justice League.'
            href='#'
            onClick = { this.handleClick }
            watched = { ids[1] }
            id = '1'
          />
          <MovieCard imgURL='https://vignette.wikia.nocookie.net/youngjustice/images/d/d1/Batman.png'
            title = 'Batman'
            description= 'Batman (real name Bruce Wayne) is a crime-fighter from Gotham City and a founding member of the Justice League. When Nightwing was still Robin, Batman was his mentor; since then, he has gone on to mentor several other protégés, including a new Robin and Batgirl. In 2018, he resigned, along with several others, from the Justice League out of frustration with the U.N. sanctions put on the organization by Secretary-General Lex Luthor. Since then, he has assembled and commands a new team, consisting of both former League and Team members as part of a new strategy to combat meta-human trafficking and the Light. On February 24, 2019, he rejoined the Justice League.'
            href='#'
            onClick = { this.handleClick }
            watched = { ids[2] }
            id = '2'
          />
          <MovieCard imgURL='https://vignette.wikia.nocookie.net/youngjustice/images/d/d1/Batman.png'
            title = 'Batman'
            description= 'Batman (real name Bruce Wayne) is a crime-fighter from Gotham City and a founding member of the Justice League. When Nightwing was still Robin, Batman was his mentor; since then, he has gone on to mentor several other protégés, including a new Robin and Batgirl. In 2018, he resigned, along with several others, from the Justice League out of frustration with the U.N. sanctions put on the organization by Secretary-General Lex Luthor. Since then, he has assembled and commands a new team, consisting of both former League and Team members as part of a new strategy to combat meta-human trafficking and the Light. On February 24, 2019, he rejoined the Justice League.'
            href='#'
            onClick = { this.handleClick }
            watched = { ids[3] }
            id = '3'
          />
        </div>

      </div>
    );
  }
}

export default App;
