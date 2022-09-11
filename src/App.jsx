import styles from './App.module.scss';
import PokemonList from './pages/PokemonList';

function App() {
  return (
    <div className={styles.appContainer}>
      <PokemonList />
    </div>
  );
}

export default App;
