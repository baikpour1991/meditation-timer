import PropTypes from 'prop-types'
import { Div, Span } from './TimerDigitStyledComponent'

export const TimerDigit = ({ value }) => {
  return (
    <Div>
      <Span>{value}</Span>
    </Div>
  )
}

TimerDigit.propTypes = {
  value: PropTypes.number.isRequired,
}
