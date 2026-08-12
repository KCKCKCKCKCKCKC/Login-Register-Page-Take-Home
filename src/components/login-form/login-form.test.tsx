import { render, screen, fireEvent } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from './login-form';

function renderWithProvider(ui: React.ReactElement) {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

describe('LoginForm', () => {
  it('shows an error for invalid credentials', () => {
    renderWithProvider(<LoginForm onSuccess={vi.fn()} onGoToSignUp={vi.fn()} />);
    fireEvent.change(screen.getByPlaceholderText('hello@gmail.com'), {
      target: { value: 'wrong@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your password'), {
      target: { value: 'wrongpass1' },
    });
    fireEvent.click(screen.getByText('Login'));
    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
  });

  it('calls onSuccess with the matched user for valid credentials', () => {
    const onSuccess = vi.fn();
    renderWithProvider(<LoginForm onSuccess={onSuccess} onGoToSignUp={vi.fn()} />);
    fireEvent.change(screen.getByPlaceholderText('hello@gmail.com'), {
      target: { value: 'admin@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Your password'), {
      target: { value: 'Admin123' },
    });
    fireEvent.click(screen.getByText('Login'));
    expect(onSuccess).toHaveBeenCalledWith(
      expect.objectContaining({ email: 'admin@example.com', role: 'readwrite' })
    );
  });
});