import { Button, Paper, PinInput, Text, Title } from '@mantine/core';
import { useState } from 'react';
import classes from '/src/App.module.css';
import type { MockUser } from '../types';
import { MOCK_OTP } from '../mock-users';

interface Props {
  user: MockUser;
  onVerified: () => void;
}

export function MfaForm({ user, onVerified }: Props) {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleVerify = () => {
    if (otp !== MOCK_OTP) {
      setError('Invalid code');
      return;
    }
    setError(null);
    onVerified();
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form}>
        <Title order={3} className={classes.title}>Two-step verification</Title>
        <Text ta="center" size="sm" c="dimmed" mb="md" mt="md">
          Enter the code sent to {user.email}. For this demo, use <b>{MOCK_OTP}</b>.
        </Text>
        <PinInput length={6} value={otp} onChange={setOtp} type="number"
          styles={{ root: { justifyContent: 'center' } }} />
        {error && <Text c="red" size="sm" mt="sm" ta="center">{error}</Text>}
        <Button fullWidth mt="xl" size="md" radius="md" onClick={handleVerify}>
          Verify
        </Button>
      </Paper>
    </div>
  );
}