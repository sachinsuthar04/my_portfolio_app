
export default function Footer() {
  return (
    <footer className="section border-t border-border">
      <div className="container text-center text-sm text-fg/70">
        © {new Date().getFullYear()} Sachin Suthar. All rights reserved. <br />
        <span className="text-fg/50">Made with ♥︎ by Sachin</span>
      </div>
    </footer>
  );
}
