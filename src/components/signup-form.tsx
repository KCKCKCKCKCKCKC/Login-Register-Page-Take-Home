import { Button, Paper, Text, Title } from '@mantine/core';
import classes from '/src/App.module.css';

interface Props {
  onBackToLogin: () => void;
}

export function SignUpForm({ onBackToLogin }: Props) {
  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form}>
        <Title order={3} className={classes.title}>Create an account</Title>
        <Text ta="center" size="sm" c="dimmed" mb="md" mt="md">
          This is a mock sign-up screen. Submitting just returns you to login.
        </Text>
        <Button fullWidth size="md" radius="md" onClick={onBackToLogin}>
          Back to login
        </Button>
      </Paper>
    </div>
  );
}