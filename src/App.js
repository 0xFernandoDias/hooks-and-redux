import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [repositories, setRepositories] = useState([])

  const API = 'https://api.github.com/users/nand0diaz/repos'

  useEffect(() => {
    axios.get(API)
      .then(response => setRepositories(response.data))
  }, [])

  useEffect(() => {
    const filteredFavorites = repositories.filter(element => element.favorite)

    document.title = `You got ${filteredFavorites.length} favorite repositories`
  }, [repositories])

  const handleFavorite = id => {
    const newRepositories = repositories.map(element => {
      return element.id === id ? {
        ...element, favorite: !element.favorite
      } : element
    })

    setRepositories(newRepositories)
  }

  return (
    <>
      {console.log(repositories)}
      <ul className="list-group">
        {repositories.map(element => {
          return (
            <li className="list-group-item" key={element.id}>
              {element.name} {element.favorite && <span>(favorite)</span>} <br/>

              <button
                type='button'
                className='btn btn-secondary'
                style={{marginTop: '5px'}}
                onClick={() => handleFavorite(element.id)}>
                  {element.favorite ? 'Remove favorite' : 'Favorite'}
              </button>
              
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
