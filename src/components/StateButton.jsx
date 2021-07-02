import styled from "styled-components"

export function StateButton ({state, setState}) {
    return (
        <Container>
            <button type='button'
                className='btn btn-secondary btn-lg'
                onClick={() => setState(state + 1)}
            >
                {
                    state === 0 ?
                        'Click me'
                    : state === 1 ?
                        `You clicked here ${state} time`
                    : `You clicked here ${state} times` 
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