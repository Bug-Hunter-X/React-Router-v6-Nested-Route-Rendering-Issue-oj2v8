```javascript
import { BrowserRouter, Routes, Route, useSearchParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />}>
          <Route path=':id' element={<ContactDetails />} />
        </Route>        
      </Routes>
    </BrowserRouter>
  );
}

function Home() { return <h1>Home</h1>; }
function About() { return <h1>About</h1>; }
function Contact() { return <h1>Contact</h1>; }

function ContactDetails() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('id');
  return (
    <h1>Contact Details</h1>
    <div>ID: {id}</div>
  );
}
export default App;
```