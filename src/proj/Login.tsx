import React, { useState } from "react";
import axios from 'axios';

const Login: React.FC = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleSubmit = async (e:React.FromEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/login")
        } catch (err) {
        }
    }
    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}></form>
                <div>
                    <label>ID</label>
                    <input
                        type="text"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
                <div>
                    <label>PW</label>
                    <input
                        type="password"
                        value={pw}
                        onchange={(e) => setPw(e.target.value)}
                    />
                </div>
                <button type="submit">로그인</button>
        </div>
    )
};

export default Login;