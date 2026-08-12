import { Anchor, Button, PasswordInput, Text, TextInput, Title, Paper } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from '/src/App.module.css';
import type { MockUser } from '../../types';
import { MOCK_USERS } from '../../mock-users';
import { useState } from 'react';

interface Props {
  onSuccess: (user: MockUser) => void;
  onGoToSignUp: () => void;
}

export function LoginForm({ onSuccess, onGoToSignUp }: Props) {
  const [loginError, setLoginError] = useState<string | null>(null);

  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: {
      email: (val) =>
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) ? null : 'Invalid email format',
      password: (val) =>
        val.trim().length <= 6 ? 'Password must be at least 6 characters' : null,
    },
  });

  const handleSubmit = form.onSubmit((values) => {
    const found = MOCK_USERS.find(
      (u) => u.email === values.email && u.password === values.password
    );
    if (!found) {
      setLoginError('Invalid email or password');
      return;
    }
    setLoginError(null);
    onSuccess(found);
  });

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form}>
        <Title order={3} className={classes.title}>Welcome back</Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            required label="Email address" placeholder="hello@gmail.com"
            {...form.getInputProps('email')} mt="xl" size="md" radius="md"
          />
          <PasswordInput
            required label="Password" placeholder="Your password"
            {...form.getInputProps('password')} mt="md" size="md" radius="md"
          />
          {loginError && <Text c="red" size="sm" mt="sm">{loginError}</Text>}
          <Button type="submit" fullWidth mt="xl" size="md" radius="md">Login</Button>
        </form>
        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor component="button" type="button" fw={500} onClick={onGoToSignUp}>
            Sign up
          </Anchor>
        </Text>
        <Text ta="center" mt="xs" size="xs" c="dimmed">
          Try: admin@example.com / Admin123 (read/write) or viewer@example.com / Viewer123 (read-only)
        </Text>
      </Paper>
    </div>
  );
}