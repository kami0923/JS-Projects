@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-image: url('alexandra-mirghe-CO-rNFAVsRU-unsplash.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.container {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    padding: 40px;
    border: 2px solid rgba(0, 0, 0, 0.8); /* dark border added */
    border-radius: 20px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
    max-width: 400px;
    width: 100%;
    text-align: center;
    color: #fff;
}


h1 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.input-container {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

input[type="text"] {
    flex: 1;
    padding: 10px 15px;
    border-radius: 8px;
    border: none;
    outline: none;
    font-size: 1rem;
    background-color: rgba(255, 255, 255, 0.9);
}

button {
    padding: 10px 20px;
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: linear-gradient(135deg, #0072ff, #00c6ff);
}

#weather-info {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    transition: all 0.4s ease-in-out;
}

#weather-info h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

#weather-info p {
    font-size: 1.2rem;
    margin: 5px 0;
}

#weather-info:hover {
    transform: scale(1.02);
    box-shadow: 0 0 15px rgba(255,255,255,0.5);
}

#error-message {
    color: #ff4d4d;
    font-weight: bold;
    margin-top: 20px;
}

.hidden {
    display: none;
}
