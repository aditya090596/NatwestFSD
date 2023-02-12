import React from 'react'
import "./CSS/Header.css"
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


export default function Header() {

    let navigate = useNavigate();
    const [log, setLog] = React.useState(false);

    function logout() {
        navigate("/login");
        localStorage.removeItem('token');
        setLog(false)
    };

    React.useEffect(() => {
        fetch('http://localhost:8090/auth/isAuthenticated', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(res => res.json())
            .then(data => {
                if (data.status !== 401) {
                    setLog(true)
                }
            });
    })

    return (
        <div>
            <header className="header-sec">
                <nav className="ms-lg-5 ms-md-0 ms-sm-0 ms-0 navbar navbar-expand-lg p-0">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#mainnav" aria-controls="mainnav"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id='mainnav'>
                            <div >
                                <ul className="nav nav-tabs" id="myTab" role="tablist">

                                    {(!log) ?
                                        <>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link text-primary active" id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" onClick={() => { navigate("/personal") }}>Personal</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link text-primary" id="profile-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false" onClick={() => { navigate("/premier") }}>Premier</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link text-primary" id="contact-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Business</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link text-primary" id="disabled-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false">Corporate and Institutions</button>
                                            </li>
                                        </> :
                                        <>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link text-primary active" id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" onClick={() => { navigate("/dashboard") }}>Hello Vivek</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link text-primary active" id="home-tab" data-bs-toggle="tab" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true" onClick={() => { navigate("/dashboard") }}>Your Account</button>
                                            </li>
                                        </>
                                    }
                                </ul>
                            </div>
                            <div className="ms-auto">

                                <ul className="nav nav-tabs">
                                    {(!log) ?
                                        <li className="nav-item">
                                            <Link to="/login" className="nav-link text-primary loginbtn">Login</Link>
                                        </li>
                                        :
                                        <li className="nav-item">
                                            <Link onClick={logout} className="nav-link text-primary active">Logout</Link>
                                        </li>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </div>
    )
}

