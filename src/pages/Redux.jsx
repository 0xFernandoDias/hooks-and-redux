import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { sum, subtract } from '../store/calculator/calculator.actions'
import styled from 'styled-components'

export function Redux () {
    useEffect(() => document.title = 'Redux')

    const dispatch = useDispatch()
    const result = useSelector(state => state.calculator)

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    return (
        <Container>
            <Input
                type='number'
                className='form-control'
                placeholder='A'
                value={a}
                onChange={e => setA(Number(e.target.value))}
            />
            <Input
                type='number'
                className='form-control'
                placeholder='B'
                value={b}
                onChange={e => setB(Number(e.target.value))}
            />
            <ButtonContainer className="btn-group" role="group">
                <button
                    className='btn btn-dark'
                    onClick={() => dispatch(sum(a, b))}    
                >
                    Add both
                </button>
                <button
                    className='btn btn-secondary'
                    onClick={() => dispatch(subtract(a, b))}    
                >
                    Subtract both
                </button>
            </ButtonContainer>
            <h4>
                Result: { result }
            </h4>
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
const Input = styled.input`
    max-width: 15%;
`
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-bottom: 5px;
`