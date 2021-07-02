import { useReducer, useEffect } from 'react'
import styled from 'styled-components'

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        default:
            throw new Error()
    }
}

export function Reducer() {
    useEffect(() => document.title = 'Reducer')

    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <Container>
            <h3>Count: {state}</h3>
            <div>
            {
                state > 0 ?
                <Button 
                    className='btn btn-danger'
                    onClick={() => dispatch({ type: 'decrement' })}
                >
                    -
                </Button>
                : null
            }
                <button 
                    className='btn btn-success'
                    onClick={() => dispatch({ type: 'increment' })}
                >
                    +
                </button>
            </div>
        </Container>
    )
}

const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 90vh;
`

const Button = styled.button`
    margin-right: 5px;
`