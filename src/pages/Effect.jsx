import { useEffect, useState } from 'react'
import { StateButton } from '../components/StateButton'

export function Effect() {
    const [count, setCount] = useState(0)

    useEffect(() => document.title = 'Effect')

    useEffect(() => alert('Component did mount'), [])

    useEffect(() => count > 0 ? alert('Hello side effect!') : null, [count])

    return (
        <>
            <StateButton state={count} setState={setCount} />
        </>
    )
}