import { useRef, useEffect } from 'react'
import styled from 'styled-components'

export function Ref() {
    useEffect(() => document.title = 'Ref')

    const count = useRef(0)

    return (
        <Container>
            <button
                className='btn btn-secondary'
                onClick={() => count.current++}
            >
                {count.current}
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