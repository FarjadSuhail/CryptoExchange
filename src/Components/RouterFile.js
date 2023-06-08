import { Link } from 'react-router-dom'
function RouterFile() {

    return (
        <>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default RouterFile;