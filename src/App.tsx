import Navbar from './components/organisms/Navbar.js';
import './styles/variables.css';

export default function App() {
  return (
    <>
      {/* transparentOnTop=true expects a hero image/section behind it.
          Set to false on pages without a hero (e.g. checkout, contact). */}
      <Navbar transparentOnTop cartCount={3} />

      <main style={{ padding: '2rem' }}>
        <h1 style={{ fontFamily: 'var(--font-display)' }}>Page content goes here</h1>
        <p>Scroll down to see the navbar shrink and pick up a background.</p>
        <div style={{ height: '150vh' }} />
      </main>
    </>
  );
}