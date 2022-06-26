import React, { useState } from 'react';
import HomePage from "./HomePage";
import ProfessionalPage from './ProfessionalPage';

export type Page = 'home' | 'professional';

function App() {

  const [page, setPage] = useState<Page>('home');
  if (page === 'professional') {
    return <ProfessionalPage setPage={setPage} />
  }
  return <HomePage setPage={setPage} />;
}

export default App;
