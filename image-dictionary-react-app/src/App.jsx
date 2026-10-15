import { useState, useEffect } from "react";
import React from "react";
import "./index.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://www.freetogame.com/api/games?platform=pc"
      );

      const result = await res.json();

      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div className="main">
      <h1>games paradise</h1>

      <div className="container">
        {data.map((items,key) => {
          return (
            <div className="card" key={key}>
              <h1 className="head">{items.title}</h1>
              <img src={items.thumbnail} alt={items.thumbnail} className="img"/>
              <h2 className="gen"><span className="genre">Genre : </span>{items.genre}</h2>

              <h2><span className="genre">Description : </span>{items.short_description}</h2>
              <h3><span className="genre">Platform : </span>{items.platform}</h3>
              <h4><span className="genre">Publisher : </span>{items.publisher}</h4>
              <h4><span className="genre">Developer : </span> {items.developer}</h4>
              <h5><span className="genre">Release Date : </span>{items.release_date}</h5>

              <a
                href={
                  items.game_url
                }
                target="_blank"
                rel="noreferrer"
              >
                about game
              </a>
              <a
                href={
                  items.freetogame_profile_url
                }
                target="_blank"
                rel="noreferrer"
              >
                game url
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;