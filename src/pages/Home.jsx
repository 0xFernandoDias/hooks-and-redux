import styled from 'styled-components'

export function Home() {
    return (
        <StyledH1>
            Choose a hook example above
        </StyledH1>
    )
}

const StyledH1 = styled.h1`
    justify-content: center;
    display: flex;
    flex-direction: center;
    align-items: center;
    height: 90vh;
`