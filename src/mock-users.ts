import type { MockUser } from './types';

export const MOCK_USERS: MockUser[] = [
  { email: 'admin@example.com', password: 'Admin123', role: 'readwrite', name: 'Alex (Admin)' },
  { email: 'viewer@example.com', password: 'Viewer123', role: 'readonly', name: 'Sam (Viewer)' },
];

export const MOCK_OTP = '123456';