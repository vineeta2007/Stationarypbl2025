import Header from './components/Header';
import Hero from './components/Hero';
import ProductList from './components/ProductList';
import About from './components/About';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductList />
        <About />
        <Testimonials />
        <BookingForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
