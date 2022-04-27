# Client-side Development Log

## Project Setup

- `mkdir client` and `cd client`

- `npx create-react-app .`

- remove create-react-app boilerplate

- create `assets` directory in `src/` and add assets

- `touch .env` and update `.gitignore`

- update title in `public/index.html` and replace `favicon.ico` in `public/`.

- setup `normalize.css` (`npm install normalize.css`) and `import "normalize.css";` in `src/index.js`

- setup global styles in `index.css`

- create `pages` and `components` directory in `src/`

- install React Router `npm install react-router-dom`

- install styled-components `npm install styled-components`

- install Prettier `npm install -D prettier` and create config file `echo {}> .prettierrc.json`
- update `.prettierrc.json` and `package.json`

  ```json
  {
    "tabWidth": 2
  }
  ```

  ```json
  "format": "prettier --write \"src/**/*.{js,jsx}\"",
  "format:check": "prettier --check \"src/**/*.{js,jsx}\""
  ```

## Reusable Components

- create `Logo.js` in `src/components`

  ```jsx
  import logo from "../assets/images/logo.svg";

  const Logo = () => {
    return <img src={logo} alt="jobify" className="logo" />;
  };
  export default Logo;
  ```

- create `index.js` in `src/components`

  ```jsx
  import Logo from "./Logo";
  
  export { Logo };
  ```

## Pages and Routing

- create `Landing.js`, `Dashboard.js`, `Register.js` and `Error.js` in `src/pages`
- create `index.js` in `src/pages`

  ```jsx
  import Dashboard from "./Dashboard";
  import Landing from "./Landing";
  import Register from "./Register";
  import Error from "./Error";

  export { Dashboard, Landing, Register, Error };
  ```

- setup page routing in `src/App.js`

  ```jsx
  import { Dashboard, Landing, Register, Error } from "./pages";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  
  function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  ```

## Landing Page

Inside `src/pages/Landing.js`

```jsx
import main from "../assets/images/main-alternative.svg";
import styled from "styled-components";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby meggings listicle mlkshk narwhal ugh semiotics. Keffiyeh
            gluten-free flannel selvage. Williamsburg YOLO drinking vinegar,
            iPhone raclette schlitz twee beard wolf portland post-ironic banh mi
            single-origin coffee. Enamel pin austin bicycle rights cornhole
            franzen pour-over squid whatever asymmetrical. Lo-fi tattooed 90's
            selfies tacos raw denim tumeric +1 narwhal four loko.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
```

## Error Page

Inside `src/pages/Error.js`
```jsx
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.svg";

const Wrapper = styled.main`
  text-align: center;
  img {
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: var(--grey-500);
  }
  a {
    color: var(--primary-500);
    text-decoration: underline;
    text-transform: capitalize;
  }
`;

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page you're looking for</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
```

