import { useEffect, useState } from 'react'
import { Paper, Button, Title, Text } from '@mantine/core'

import { useAppShell } from 'ui'

const pickNumber = () => Math.ceil(Math.random() * 10) + 2

export const TopNumber = () => {
  const [topNumber, setTopNumber] = useState<number>(0)
  const [playing, setPlaying] = useState<boolean>(false)
  const [currentValue, setCurrentValue] = useState<number>(0)

  const { addToScore, user } = useAppShell()

  useEffect(() => {
    if (playing) {
      const timer = setTimeout(() => {
        if (currentValue < topNumber) {
          setCurrentValue(currentValue + 1)
        } else {
          addToScore(-1)
          setCurrentValue(0)
          setPlaying(false)
        }
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [playing, topNumber, currentValue, addToScore])

  if (!user) {
    return (
      <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
        <Title>Top Number!!!</Title>
        <Text>Log in to play!</Text>
      </Paper>
    )
  }

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title> How high can you do it? 😁 </Title>
      {playing && (
        <Button
          mt="md"
          variant="outline"
          color="violet"
          size="xl"
          fullWidth
          onClick={() => {
            addToScore(currentValue)
            setCurrentValue(0)
            setPlaying(false)
          }}
        >
          {currentValue} - Snag It!
        </Button>
      )}
      {!playing && (
        <Button
          mt="md"
          size="xl"
          fullWidth
          onClick={() => {
            setPlaying(true)
            setTopNumber(pickNumber())
          }}
        >
          Play
        </Button>
      )}
    </Paper>
  )
}
