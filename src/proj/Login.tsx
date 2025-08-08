import React, { useState } from "react";
import axios from 'axios';

const Login: React.FC = () => {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:8080/login", {id, pw})
            console.log("success")
            console.log(res);
        } catch (err) {
            console.log("fail")
            console.log(err)
        }
    }
    return (
        <div>
            <h2>로그인</h2>
            <form onSubmit={handleSubmit}>
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
                        onChange={(e) => setPw(e.target.value)}
                    />
                </div>
                <button type="submit">로그인</button>
            </form>
        </div>
    )
};

export default Login;