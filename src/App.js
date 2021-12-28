import AppLayout from "./components/organism/AppLayout";
import axios from "axios";
import { useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const App = () => {
  const apiKey = "d029c92fa1f147c2419ab76b6d11f301";

  const [nameText, setNameText] = useState("");
  const [limit, setLimit] = useState(20);
  const [finishedData, setFinishedData] = useState(false);
  const [heroesData, setHeroesData] = useState([]);

  const fetchMoreData = () => {
    if (limit < 100) {
      setTimeout(() => {
        setLimit(limit + 20);
      }, 500);
    } else {
      console.log("No hay más datos");
      setFinishedData(true);
    }
  };

  const apiFetch = async () => {
    try {
      const { data } = await axios.get(
        nameText !== ""
          ? `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&name=${nameText}&limit=${limit}`
          : `https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&limit=${limit}`
      );

      setHeroesData(data.data.results);
    } catch (e) {
      console.error(e);
      console.log("Ups! I did it again");
    }
  };
  const setText = (text) => {
    setNameText(text);
    setLimit(20);
  };

  useMemo(() => {
    setFinishedData(false);
    apiFetch();
  }, [nameText, limit]);

  return (
    <InfiniteScroll
      dataLength={heroesData.length}
      next={fetchMoreData}
      hasMore={true}
      loader={
        !finishedData && limit < 100 && heroesData.length > 0 ? (
          <h4
            style={{
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: "5%",
            }}
          >
            Loading characters...
          </h4>
        ) : finishedData ? (
          <h4
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: "0 5% 5% 5%",
            }}
          >
            Soon you will have more characters
          </h4>
        ) : !finishedData ? (
          <h4
            style={{
              textAlign: "center",
              fontWeight: "bold",
              margin: "0 5% 5% 5%",
            }}
          >
            Please try another name again
            <br />
            Please enter a specified full character name
          </h4>
        ) : null
      }
    >
      <AppLayout data={heroesData} setText={setText} />
    </InfiniteScroll>
  );
};

export default App;
