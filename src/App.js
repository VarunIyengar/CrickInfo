// import logo from './logo.svg';
import './App.css';
import Home from "./Components/Home.js";
import { Footer } from "./Components/Footer.js";
import { About } from "./Components/About.js";
import { AddPlayer } from "./Components/AddPlayer.js";
import { Player } from "./Components/Player.js";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header } from "./Components/Header.js";
import { useState } from "react";

function App() {

  let initialplayers;
  if (localStorage.getItem("players") === null) {
    initialplayers = [];
  }
  else {
    initialplayers = JSON.parse(localStorage.getItem("players"));
  }

  const [players, setplayers] = useState(initialplayers);


  const addPlayer = (name,description,photo) => {
    let a = 0;
    let new_player = {
      name:name,
      description:description,
      photo:photo
    }
    if (players === null) {
      setplayers([new_player]);
    }
   else
    {
      players.map((player) => {
        if (player.name === new_player.name) {
          a = 1;
          alert("This player has already been added.")
        }
      })
    }
    if (a === 0) {
      setplayers([...players, new_player]);
      alert("Player added Successfully");
    }
  }
  
  const [splayer, setsplayer] = useState({});

  const search = (player_name, searchlink) => {
    if(!player_name)
    {
      alert("Please Enter name of Player to be Searched.");
    }
    else{
    let x = 0;
    {
      // players.map((player) => {
      players.forEach(player => {
        if (player_name === player.name) {
          setsplayer(player);
          // console.log(splayer);
          searchlink.click();
          x = 1;
        }
      });
    }
    if (x == 0) {
      alert("The Player entered was not found in our records.")
    }
  }
  }
  return (
     <div className="bg-dark">
      <Router>
        <Header search={search} />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/" render={() => {
            return (
              <>
                {/* <Input addPlayer = {addPlayer}/>; */}

                <Home players={players} setplayers={setplayers} />
              </>
            )
          }} />
          <Route path="/AddPlayer">
            <AddPlayer addPlayer={addPlayer} />
          </Route>
          <Route path="/Search">
            {/* <h2 className='text-light text-center'>The search results are as follows.</h2> */}
            <Player player={splayer} />
          </Route>
          {/* {
  Home.s_player.name && (<Search splayer = {Home.s_player} />)
} */}
        </Switch>

        {/* <Body name="Mahendra Singh Dhoni" desc = "This is Mahendra Singh Dhoni. Arguably the greatest Wicketkeeper Batsman And Captain India has ever produced. He is very calm and composed and is also called Mr.Cool. He is the only captain to win all the ICC trophies that existed during his time.The T-20 World Cup(2007), the One Day World Cup(2011) and the Chmpions Trophy (2013) . He has scored more than 10k Odi runs in his Long and entertaining career spanning more than 15 years. He is probably the greatest there ever was and is the greatest there ever will be." image = "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/04/02/667583-618537-dhoni-winning-shot-twitter.jpg" width = "600px" height = "400px"/>
     <Body name = "Yuvraj Singh" desc = "This is Yuvraj Singh. He is probably the best Left Handed Batsman India ever produced and one the greatest players to play the white ball game. He was instrumental in India`s success in the 2007 and 2011 world cup wins. Everyone can still remeber the way he bashed Stuart Broad for six sixes in an over after a heated exchange with Andrew Flintoff in the T-20 World Cup in 2007. Hey played the 2011 World Cup despite having cancer and not only performed magnificiently with the bat but also with the ball which won him the Man of the Tournament award. After the Cancer treatment he did make his comeback for the Indian team but was`nt the same Old Yuvraj as before. Nevertheless he still produced some breath-taking knocks after cancer which is still cherished by all and even got his highest score of 150 against England in 2017 in his Comeback seriess after being dropped for nearly 4 years." image = "https://sportzwiki.com/wp-content/uploads/2021/04/140497-pwcleivctf-1587964023.jpg" width = "750px" height = "450px"/> */}
        <Footer />
      </Router>


    </div>
  );
}

export default App;
