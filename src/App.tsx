import { useState } from 'react';
import type { Screen, MockUser } from './types';
import { LoginForm } from './components/login-form/login-form';
import { SignUpForm } from './components/signup-form';
import { MfaForm } from './components/mfa-form';
import { ProtectedScreen } from './components/protected-screen/protected-screen';


function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [currentUser, setCurrentUser] = useState<MockUser | null>(null);

  const handleLoginSuccess = (user: MockUser) => {
    setCurrentUser(user);
    setScreen('mfa');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setScreen('login');
  };

  if (screen === 'login') {
    return <LoginForm onSuccess={handleLoginSuccess} onGoToSignUp={() => setScreen('signup')} />;
  }
  if (screen === 'signup') {
    return <SignUpForm onBackToLogin={() => setScreen('login')} />;
  }
  if (screen === 'mfa' && currentUser) {
    return <MfaForm user={currentUser} onVerified={() => setScreen('protected')} />;
  }
  if (screen === 'protected' && currentUser) {
    return <ProtectedScreen user={currentUser} onLogout={handleLogout} />;
  }

  return null;
}

export default App;