import React, {useEffect, useState} from "react";
import axios from "axios";

import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";
import FetchError from "../FetchError/FetchError";
import FilmsDataItem from "./FilmsDataItem";
import "./FetchFilmsData.css";

const FetchFilmsData = () => {
  const [fetchData, setFetchData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");


  useEffect(() => {
    let mounted = true;
    axios.get("https://swapi.dev/api/films/")
      .then((res) => {
        if (mounted) {
          setFetchData(res.data.results)
          setIsLoading(false)
          setFetchError("")
        }
      })
      .catch(e => {
        setIsLoading(false)
        setFetchData([])
        setFetchError(e)

        console.log(e)
      })

    return () => {
      mounted = false;
    }
  }, [])

  return (
    <div className="filmsdata">
      <h4 className="filmsdata__header">Films</h4>

      <div className="filmsdata__table-head">
        <p>Film Title</p>
        <p>Director</p>
        <p>Producer</p>
        <p>Release Date</p>
        <p>Episode ID</p>
        <p>Character</p>
      </div>

      {isLoading ? <LoadingAnimation /> : ""}
      {
        fetchData && fetchData.map((element) => <FilmsDataItem 
                                  title={element.title}
                                  director={element.director}
                                  producer={element.producer}
                                  releaseDate={element.release_date}
                                  episodeID={element.episode_id}
                                  charater={element.characters[0]}     
                                  key={`${element.title}${element.release_date}`}  
        />)
      }

      {
        fetchError ? <FetchError /> : <div></div>
      }

    </div>
  )
}

export default FetchFilmsData;