import { useState } from 'react'
import { Box, Paper, Text, Button, Title } from '@mantine/core'
import { shuffle } from 'lodash'

import { useAppShell } from 'ui'

const OPTIONS = [10, 5, 2, -1, -2]

export const CardPicker = () => {
  const [cards, setCards] = useState<number[]>(shuffle(OPTIONS))
  const [played, setPlayed] = useState<number | null>(null)

  const { addToScore, user } = useAppShell()

  const handleSelectCard = (card: number, index: number) => {
    addToScore(card)
    setPlayed(index)
  }

  // Play again after 3 seconds
  if (played !== null) {
    setTimeout(() => {
      setCards(shuffle(OPTIONS))
      setPlayed(null)
    }, 3000)
  }

  if (!user) {
    return (
      <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
        <Title>Card Picker!!!</Title>
        <Text>Please login to play</Text>
      </Paper>
    )
  }

  return (
    <Paper shadow="sm" radius="md" p="md" m="10" withBorder>
      <Title sx={{ marginBlockEnd: 10 }}> Pick a card. Good Luck! 🌠</Title>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: '1rem',
        }}
      >
        {cards.map((card, index) => (
          <Button
            variant="gradient"
            disabled={played !== null && index !== played}
            p={5}
            sx={{
              borderRadius: 15,
              height: 200,
              border: '5px solid black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            key={index}
            onClick={() => {
              played === null && handleSelectCard(card, index)
            }}
          >
            {played !== null && <Text sx={{ fontSize: '40pt' }}>{card}</Text>}
          </Button>
        ))}
      </Box>
    </Paper>
  )
}
