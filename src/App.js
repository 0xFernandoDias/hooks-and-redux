import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [repositories, setRepositories] = useState([
    {id: 1, name: 'repo-1'},
    {id: 2, name: 'repo-2'},
    {id: 3, name: 'repo-3'}
  ])

  function handleAddRepository() {
    setRepositories([
      ...repositories,
      {id: repositories.length + 1, name: `repo-${repositories.length + 1}`}
    ])
  }

  useEffect(() => {
    console.log(repositories[repositories.length - 1])
  }, [repositories])

  return (
   <>
    <ul className="list-group">
      {repositories.map(element => {
        return (
        <li className="list-group-item" key={element.id}>
          {element.name}
        </li>
        )
      })}
    </ul>
    <button className='btn btn-primary' onClick={handleAddRepository}>
      Add repository
    </button>
   </>
  )
}

export default App
