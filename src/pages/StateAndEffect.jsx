import { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

export function StateAndEffect() {
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
      <StyledH3>GitHub Repositories</StyledH3>
      <ul className="list-group">
        {repositories.map(element => {
          return (
            <li className="list-group-item" key={element.id}>
              {element.name} {element.favorite && <span>(favorite)</span>} <br />
              <Button
                type='button'
                className='btn btn-secondary'
                onClick={() => handleFavorite(element.id)}
              >
                {element.favorite ? 'Remove favorite' : 'Favorite'}
              </Button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

const StyledH3 = styled.h3`
  margin-left: 5px;
`

const Button = styled.button`
  margin-top: 5px;
`

