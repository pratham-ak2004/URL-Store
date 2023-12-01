# URL Store

This is a template website for a <b>URL Shortening</b> built using <b>[Vite](https://vitejs.dev/) + [React](https://react.dev/)</b>. The website is styled using <b>[bootstrap](https://getbootstrap.com/)</b> and uses <b>[react-router-dom](https://www.npmjs.com/package/react-router-dom)</b> to redirect to different pages. This template basically involves two text fields and 3 buttons for performing the basic functioning of a URL Shortening website.

![URL Store](https://github.com/pratham-ak2004/URL-Store/assets/124170443/04fd34fe-2a84-4a22-a91d-640bf3bc561e)

## Table of contents

- [Motive](#motive)
- [Features](#features)
- [Prerequiste](#prerequisite)
- [Installation](#installation)
- [Error Guide](#error-guide)
- [Contact & support](#contact--support)
- [Collaborator](#collaborators)
- [License](#license)

## Motive

The main motive of building this template is to create a website to send request to backend which will processes the request of URL Shortening service. The URL for the backend service can be given in and evnironment file and the connection can be established. This given template is used for a <b>[Spring boot](https://spring.io/projects/spring-boot)</b> application for the backend.

## Features

- console output for errors, requests, etc. are availble for debugging
- webpage is made responsive using `bootstrap`
- `.env` file for setting up connection with backend securely
- `dockerfile` for create a container image of the wesite
- TODO : home page, about, and others based on preference
- submit, clear, copy buttons for user friendly experience
- textinput configured for valid URLs only

## Prerequisite

- `npm` for running and building the project
- `git` for cloning the repository
- `docker` for creating container images of the website [optional]

## Installation

Clone the repository using git
```bash
    git clone https://github.com/pratham-ak2004/URL-Store
```
Navigate to the root directory
```bash
    cd URL-Store
```
Install the node modules form `package.json` using `npm`. You can download the LTS version of `npm` form [Node](https://nodejs.org/en)

```node
    npm install
```
Create `.env` file of your own referring `.env.example` file and add the URL's for your `ACTIVE` front-end and back-end host
```env
    VITE_ACTIVE_SERVER = ""     ## change appropriately
    VITE_ACTIVE_PAGE = ""       ## change appropriately
```
Run the development sever to see the results
```node
    npm run dev
```
To build the project use the below command. This will produce a folder named `dist` which can be used for hosting
```node
    npm run build
    npm run preview     ## To preview your build
```

## Error Guide

There may be several errors or problems while running this project. Below are some solutions to the errors

<b>Error</b> Generate.jsx:23 POST http://localhost:8080/generate/addUrl net::ERR_CONNECTION_REFUSED<br>
<b>Solution</b> The following error can be seen when your site is not getting conneted with the backend. You can try the following solutions.

1. Check you evironment variable `VITE_ACTIVE_SERVER`. It must be the root URL where your backend is running e.g. http://localhost:8080 if your back-end is hosted locally
2. Change the POST mapping URL in `Generate.jsx` at line:23
```jsx
    await fetch(`${import.meta.env.VITE_ACTIVE_SERVER}/generate/addUrl`, { //tobe configured
    }
```

<b>Error</b> Shortened URL is not being redirected<br>
<b>Solution</b> The following error can me solved by:

1. Configuring the environment variable `VITE_ACTIVE_PAGE`. It must me the root URL where the current project is running e.g. http://localhost:5173 if your front-end is hosted locally in development server
2. Change display and redirect URL in the following files:<br>
    line:70 of `Generate.jsx`
    ```jsx
        urlToDisplay = `${import.meta.env.VITE_ACTIVE_PAGE}/` + url.shortUrl; //tobe configured
    ```
    line:12 of `Redirect.jsx`
    ```jsx
        window.location.href = `${import.meta.env.VITE_ACTIVE_SERVER}/redirect/${target}`; //tobe configured
    ```

## Contact & Support

Feel free to contact me : )

[![Gmail](https://img.shields.io/badge/Gmail-EA4335.svg?style=for-the-badge&logo=Gmail&logoColor=white)](pratham20442@gmail.com)
[![Github](https://img.shields.io/badge/GitHub-181717.svg?style=for-the-badge&logo=GitHub&logoColor=white)](https://github.com/pratham-ak2004)
[![Linkdin](https://img.shields.io/badge/LinkedIn-0A66C2.svg?style=for-the-badge&logo=LinkedIn&logoColor=white)](https://www.linkedin.com/in/pratham-a-kadekar-8397a7249/)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F.svg?style=for-the-badge&logo=Instagram&logoColor=white)](https://www.instagram.com/pratham_ak2004)
[![Twitter](https://img.shields.io/badge/Twitter-1D9BF0.svg?style=for-the-badge&logo=Twitter&logoColor=white)](https://twitter.com/a_kadekar1010)

## Collaborators

- [Hithesh Poojary](https://github.com/HitheshPoojary187)

## License

[![Licence](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)](./LICENSE)
