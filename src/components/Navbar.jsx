import { Link } from 'react-router-dom'
import styled from 'styled-components'

export function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Container className="collapse navbar-collapse" id="navbarTogglerDemo03" >
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to='stateAndEffect'>State & Effect</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='state'>State</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='effect'>Effect</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='context'>Context</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='ref'>Ref</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='reducer'>Reducer</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='redux'>Redux</Link>
                        </li>
                    </ul>
                </Container>
            </nav>
        </div>
    )
}

const Container = styled.div`
    justify-content: center;
    display: flex;
`