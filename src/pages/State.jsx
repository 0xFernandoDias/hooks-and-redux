import { useState, useEffect } from 'react'
import styled from 'styled-components'

export function State() {
    useEffect(() => {
        document.title = `State`
    })

    const [count, setCount] = useState(0)

    return (
        <Container>
            <button
                className='btn btn-secondary btn-lg'
                onClick={() => setCount(count + 1)}
            >
                {
                    count === 0 ?
                        'Click me'
                        : count === 1 ?
                            `You clicked here ${count} time`
                            : `You clicked here ${count} times`
                }
            </button>
        </Container>
    )
}

const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: center;
    align-items: center;
    height: 90vh;
`