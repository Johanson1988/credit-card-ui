import React from 'react';

/** Components */
import CreditCardForm from './components/CreditCardForm';

/** Styles */
import GlobalStyle from './styles/GlobalStyle';

const App: React.FC<{}> = () => {

  return (
    <div className="App">
      <GlobalStyle />
      <CreditCardForm />
    </div>
  );
}

export default App;