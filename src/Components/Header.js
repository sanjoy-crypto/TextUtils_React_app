import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({ mode, toggleMode }) => {
    return (
        <div>
            <nav class={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <div class="container">
                    <a class="navbar-brand" href="/">TextUtils</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav me-auto">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/features">Features</Link>
                            </li>
                        </ul>
                        <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`} >
                            <input class="form-check-input" onClick={toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header


