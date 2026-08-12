import { render, screen } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import { describe, it, expect, vi } from 'vitest';
import { ProtectedScreen } from './protected-screen';

const readonlyUser = { email: 'viewer@example.com', password: 'x', role: 'readonly' as const, name: 'Viewer' };
const readwriteUser = { email: 'admin@example.com', password: 'x', role: 'readwrite' as const, name: 'Admin' };

describe('ProtectedScreen', () => {
  it('disables Edit for read-only users', () => {
    render(<MantineProvider><ProtectedScreen user={readonlyUser} onLogout={vi.fn()} /></MantineProvider>);
    expect(screen.getByRole('button', { name: 'Edit' })).toBeDisabled();
  });

  it('enables Edit for read/write users', () => {
    render(<MantineProvider><ProtectedScreen user={readwriteUser} onLogout={vi.fn()} /></MantineProvider>);
    expect(screen.getByRole('button', { name: 'Edit' })).not.toBeDisabled();
  });
});