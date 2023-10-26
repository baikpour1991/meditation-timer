import { Logo } from './Logo'
import { TimerDisplay } from './TimerDisplay'
import { TimerSetter } from './TimerSetter'
import { useEffect, useState } from 'react'
import { Div1, Div2, Span, Span2, Button, Button2 } from './TimerStyledComponents'

export const Timer = () => {
  const [inputValue, setInputValue] = useState(10)
  const [timer, setTimer] = useState(600)
  const [isRunning, setIsRunning] = useState(false)
  const [stopButtonStatus, setStopButtonStatus] = useState(true)

  const SIXTY_SECONDS = 60

  const buttonText = isRunning ? 'Pause' : 'Run'
  const buttonBackground = isRunning ? `url('./../public/pause.svg')` : `url('./../public/Play.svg')`

  const handleInputChange = (event) => {
    if (!isRunning) {
      const newValue = Number(event.target.value.replace(/[^0-9]/g, ''))
      if (newValue < 100) {
        setInputValue(newValue)
        setTimer(newValue * SIXTY_SECONDS)
      }
      if (newValue > 99) {
        setInputValue(99)
        setTimer(99 * SIXTY_SECONDS)
      }
    }
  }

  const handleStartStopButton = () => {
    if (timer > 0) {
      setIsRunning((prevState) => !prevState)
    }
  }

  const handleStopButtonClick = (event) => {
    event.stopPropagation()
    setTimer(inputValue * SIXTY_SECONDS)
    setStopButtonStatus(timer !== inputValue * SIXTY_SECONDS)
  }

  useEffect(() => {
    if (isRunning && timer > 0) {
      const timerInterval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1)
      }, 1000)

      return () => {
        clearInterval(timerInterval)
      }
    }
    if (timer === 0) {
      setIsRunning(false)
    }
    setStopButtonStatus(timer !== inputValue * SIXTY_SECONDS)
  }, [isRunning, timer, inputValue])

  return (
    <Div1>
      <Div2>
        <Logo animationTrigger={timer} />
        <Span>SimpleTimer</Span>
      </Div2>
      <TimerSetter value={inputValue} onInputChange={handleInputChange} />
      <TimerDisplay remainingTime={timer} />
      <Button onClick={handleStartStopButton}>
        {stopButtonStatus && !isRunning && <Button2 onClick={handleStopButtonClick} />}
        <Span2 data-background={buttonBackground}> {`${buttonText} Timer`}</Span2>
      </Button>
    </Div1>
  )
}
