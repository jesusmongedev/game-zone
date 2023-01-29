import { ReactNode } from 'react'
import {
  AppShell,
  Header,
  Title,
  Box,
  Button,
  useMantineTheme,
} from '@mantine/core'

import { useAppShell } from './index'

interface ShellProps {
  title: string
  children: ReactNode
}

export const Shell = ({ title, children }: ShellProps) => {
  const { user, score, setUser } = useAppShell()
  const theme = useMantineTheme()

  return (
    <AppShell
      padding="md"
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      header={
        <Header
          height={60}
          p="md"
          style={{
            display: 'flex',
            background: theme.colors.blue[8],
            alignItems: 'center',
          }}
        >
          <Title
            style={{
              color: 'white',
              flexGrow: 1,
            }}
          >
            {title}
          </Title>
          {user && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Title
                mr="md"
                style={{
                  color: 'white',
                }}
              >
                {user} | {score}
              </Title>
              <Button variant="light" onClick={() => setUser(null)}>
                Logout
              </Button>
            </Box>
          )}
          {!user && (
            <Button variant="light" onClick={() => setUser('Jack')}>
              Login
            </Button>
          )}
        </Header>
      }
    >
      {children}
    </AppShell>
  )
}
