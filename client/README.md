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

## Register Page Setup

Inside `src/pages/Register.js`

```jsx
import styled from "styled-components";
import { useState } from "react";
import { Logo, FormRow, Alert } from "../components";

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((values) => {
      return { ...values, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>Login</h3>
        {values.showAlert && <Alert />}
        <FormRow />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
```

## FormRow and Alert component

- create `FormRow.js` in `src/components`

```jsx
const FormRow = ({ type, name, id, value, handleChange, labelText }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        className="form-input"
        type={type}
        value={value}
        onChange={handleChange}
        name={name}
        id={id}
      />
    </div>
  );
};
export default FormRow;
```

- create `Alert.js` in `src/components`

```jsx
const Alert = () => {
  return <div className="alert alert-danger">Alert goes here</div>;
};
export default Alert;
```

- update `index.js` in `src/components`

```jsx
import Logo from "./Logo";
import FormRow from "./FormRow";
import Alert from "./Alert";

export { Logo, FormRow, Alert };
```

- update `Register.js` in `src/pages/Register.js`

```jsx
const Register = () => {
  // ...
  return (
    // ...
        {values.showAlert && <Alert />}
        <FormRow
          type="text"
          value={values.name}
          name="name"
          id="name"
          handleChange={handleChange}
        />
        <FormRow
          type="email"
          value={values.email}
          name="email"
          id="email"
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          value={values.password}
          name="password"
          id="password"
          handleChange={handleChange}
        />
  // ...
  );
};
export default Register;
```

## toggle Login/Register Form

- update `Register.js` in `src/pages/Register.js`

```jsx
const Register = () => {
  // ...
  const toggleMember = () => {
    setValues((values) => {
      return { ...values, isMember: !values.isMember };
    });
  };
  // ...
  return (
        // ...
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {values.showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name="name"
            id="name"
            handleChange={handleChange}
          />
        )}
        // ...
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
        // ...
  );
};
export default Register;
```

## Global Context

- create `context` directory in `src/`
- create `reducer.js` in `src/context/`

```jsx
const reducer = (state, action) => {
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
```

- create `appContext.js` in `src/context/`

```jsx
import { useReducer, createContext, useContext } from "react";
import reducer from "./reducer";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
```

- update `index.js` in `src/`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
import { AppProvider } from "./context/appContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
```

## update Alert component

- update `Alert.js` in `src/components`

```jsx
const Alert = ({ alertType, alertText }) => {
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
export default Alert;
```

- update `Register.js` in `src/pages/Register.js`

```jsx
// ...
import { useAppContext } from "../context/appContext";
// ...

const Register = () => {
  // ...
  const { showAlert, alertType, alertText } = useAppContext();
  // ...
  return (
    // ...
      {showAlert && <Alert alertType={alertType} alertText={alertText} />}
    // ...
  )
}

```

## action - DISPLAY_ALERT

- create `actions.js` in `src/context/`

```js
export const DISPLAY_ALERT = "SHOW_ALERT";
```

- update `reducer.js` in `src/context/`

```jsx
import { DISPLAY_ALERT } from "./actions";

const reducer = (state, action) => {
  if (action.type === DISPLAY_ALERT) {
    return {
      ...state,
      showAlert: true,
      alertType: "danger",
      alertText: "Please provide all values!",
    };
  }
  throw new Error(`no such action : ${action.type}`);
};

export default reducer;
```

- update `appContext.js` in `src/context/`

```jsx
// ...
import { DISPLAY_ALERT } from "./actions";
// ...

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

// ...
```

- update `Register.js` in `src/pages/Register.js`

```jsx
// ...
const { showAlert, alertType, alertText, displayAlert } = useAppContext();
// ...
const handleSubmit = (e) => {
  e.preventDefault();
  const { name, email, password, isMember } = values;
  if (!email || !password || (!isMember && !name)) {
    displayAlert();
    return;
  }
};
```
