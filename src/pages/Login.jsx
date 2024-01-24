import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Create a history object for navigation

    const handleLogin = () => {
        // Perform your login logic here (e.g., validate credentials)
        // For simplicity, let's assume a successful login for any input
        // In a real-world scenario, you would typically make an API request

        // Set session variable (user is logged in)
        sessionStorage.setItem("isLoggedIn", true);

        // Redirect to the home page
        navigate("/");
    };

    return (
        <>
            <div>
                <form action="">
                    <div className=" m-4 flex flex-col items-start gap-2">
                    <img
                        className="w-20"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
                        alt=""
                    />
                    <div>
                        <h1 className="text-amber-700 text-3xl italic font-bold">Coffee Valley</h1>
                        <h3 className="text-gray-900 text-lg italic font-bold">Taste the love in every cup</h3>
                        <p className="text-gray-900 text-base">One Alewife Center 3rd Floor</p>
                        <p className="text-gray-900 text-base">Cambridge, MA 02140</p>
                    </div>
                        <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label>User ID:</label>
                                </td>
                                <td className="border">
                                    <input
                                        type="text"
                                        required
                                        value={userId}
                                        onChange={(e) => setUserId(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password:</label>
                                </td>
                                <td className="border">
                                    <input
                                        type="password"
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="text-right">
                                    <a href="/home">
                                        <button className="border bg-slate-500 text-white rounded-md px-2 py-1" onClick={handleLogin}>
                                            Login
                                        </button>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                        </table>
                        </div>
                    </form>
            </div>
        </>
    )
}

export default Login;