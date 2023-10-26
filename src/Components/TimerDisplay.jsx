import { TimerDigit } from './TimerDigit'
import PropTypes from 'prop-types'
import { Div, Span } from './TimerDisplayStyledComponent'

export const TimerDisplay = ({ remainingTime }) => {
  const seconds = remainingTime % 60
  const secondsFirstDigit = seconds % 10
  const secondsSecondDigit = Math.floor(seconds / 10)

  const minutes = Math.floor(remainingTime / 60)
  const minutesFirstDigit = minutes % 10
  const minutesSecondDigit = Math.floor(minutes / 10)

  return (
    <Div>
      <TimerDigit value={minutesSecondDigit} />
      <TimerDigit value={minutesFirstDigit} />
      <Span>:</Span>
      <TimerDigit value={secondsSecondDigit} />
      <TimerDigit value={secondsFirstDigit} />
    </Div>
  )
}

TimerDisplay.propTypes = {
  remainingTime: PropTypes.number.isRequired,
}
