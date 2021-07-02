// Context = share data without passing props
import { createContext, useContext, useEffect } from 'react'
import styled from 'styled-components'

const moods = {
    happy: '😂',
    sad: '😢',
    angry: '😡'
}

const MoodContext = createContext(moods)

export function Context() {
    useEffect(() => document.title = 'Context')

    return (
        <Container>
            <MoodContext.Provider value={moods.happy}>
                <MoodEmoji />
            </MoodContext.Provider>

            <MoodContext.Provider value={moods.sad}>
                <MoodEmoji />
            </MoodContext.Provider>

            <MoodContext.Provider value={moods.angry}>
                <MoodEmoji />
            </MoodContext.Provider>
        </Container>
    )
}

const Container = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 90vh;
`

function MoodEmoji() {
    const mood = useContext(MoodContext) // like props

    return <h1>{mood}</h1>
}