import Logo from "./logo";
import Border from "./border";
import "./layout.css";

export default function Layout({ children }) {
  return (
    <div>
      <header>
        <a className="logo" href="/">
          <Logo />
        </a>
      </header>
      <Border />
      <main>{children}</main>
      <Border />
      <footer>
        <p>
          Copyright &copy; 1984-{new Date().getFullYear()} Imperium Rozrywkowe
          "Promenada"
        </p>
      </footer>
    </div>
  );
}
