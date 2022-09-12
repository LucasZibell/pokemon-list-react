import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import styles from './App.module.scss';
import PokemonList from './pages/PokemonList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={styles.appContainer}>
        <PokemonList />
      </div>
    </QueryClientProvider>
  );
}

export default App;
