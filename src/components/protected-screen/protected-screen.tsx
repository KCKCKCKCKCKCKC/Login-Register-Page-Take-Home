import { Badge, Button, Group, Paper, Text, Title } from '@mantine/core';
import type { MockUser } from '../../types';

interface Props {
  user: MockUser;
  onLogout: () => void;
}

export function ProtectedScreen({ user, onLogout }: Props) {
  const canEdit = user.role === 'readwrite';

  return (
    <div style={{ padding: 40, maxWidth: 600, margin: '0 auto' }}>
      <Group justify="space-between" mb="lg">
        <Title order={2}>Protected Dashboard</Title>
        <Button variant="light" color="red" onClick={onLogout}>Log out</Button>
      </Group>
      <Paper withBorder p="lg" radius="md">
        <Text>Welcome, <b>{user.name}</b></Text>
        <Badge mt="xs" color={canEdit ? 'green' : 'gray'}>
          {canEdit ? 'Read/Write' : 'Read-only'}
        </Badge>
        <Text mt="lg" fw={500}>Sample record</Text>
        <Text size="sm" c="dimmed" mb="md">Project status: In progress</Text>
        <Group>
          <Button disabled={!canEdit}>Edit</Button>
          {!canEdit && <Text size="xs" c="dimmed">Read-only access — editing disabled.</Text>}
        </Group>
      </Paper>
    </div>
  );
}