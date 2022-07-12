import CharacterList from './components/CharacterList';
import Footer from './components/Footer';

function App() {
    return (
        <div className='bg-dark text-info'>
           <a href="#" className='text-decoration-none'> <h1 className='text-center display-1 py-4'>Rick & Morty API </h1> </a>
            <CharacterList />
            <Footer />

        </div>
    );
}

export default App;
