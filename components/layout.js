// components/Layout.js
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
