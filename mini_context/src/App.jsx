import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <main className="app-shell">
        <header className="app-header">
          <p className="eyebrow">React practice project</p>
          <h1>Context API With Chai</h1>
          <p className="intro">
            Share user state between components with React Context.
          </p>
        </header>
        <section className="content-grid" aria-label="Context API demo">
          <Login />
          <Profile />
        </section>
      </main>
    </UserContextProvider>
  );
}

export default App;
