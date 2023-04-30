<h1 align="center">Spotify Visualizer App</h1>

<p align="center">This is a full-stack application that visualizes and provides personalized insights of your Spotify data.</p>

## 📝 | Table of Contents
- [📝 | Table of Contents](#--table-of-contents)
- [🧰 | Languages & Tools <a name="languages_&_tools"></a>](#--languages--tools-)
- [🏁 | Getting Started <a name="getting_started"></a>](#--getting-started-)
- [⚖ | License <a name="license"></a>](#--license-)

## 🧰 | Languages & Tools <a name="languages_&_tools"></a>

For the frontend of this project, Vue and Pinia were chosen as the framework and state management library, respectively. 
On the backend, NodeJS and Express were utilized, along with the Spotify SDK, to build a scalable and efficient web application.

<p>
  <a href="https://vuejs.org/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue" width="50" height="50"/></a>
  <a href="https://pinia.esm.dev/" target="_blank"><img src="https://pinia.vuejs.org/logo.svg" alt="Pinia" width="50" height="50"/></a>
  <a href="https://nodejs.org/en/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="NodeJS" width="50" height="50"/></a>
  <a href="https://expressjs.com/" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" width="50" height="50"/></a>
  <a href="https://developer.spotify.com/documentation/web-api/" target="_blank"><img src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" alt="Spotify SDK" width="50" height="50"/></a>
</p>


## 🏁 | Getting Started <a name="getting_started"></a>
These instructions will get you a copy of the project up and running on your local machine.

**<h3>Requirements:</h3>**
<ul>
<li>NodeJS (https://nodejs.org/en/)</li>
<li>Registered Spotify App (https://developer.spotify.com/dashboard)</li>
</ul>

**<h3>Guide:</h3>**
1. Clone the repository onto your local machine
2. Register a Spotify App and add http://localhost:8888/callback as a Redirect URI in the app settings.
3. Create an .env file in the 'Backend' repository based on ```.env.example```. 
4. Open a terminal window in the './Backend/src' directory
5. Execute the following command:
<br>>```npm run start```

NOTICE: If you don't see a login button once executed, clear cache & cookies and/or run it in Incognito.


## ⚖ | License <a name="license"></a>
This repository is under the [MIT](https://opensource.org/licenses/MIT) license.
