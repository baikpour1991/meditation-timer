import PropTypes from 'prop-types'
import { Span, Input } from './TimerSetterStyledComponents'

export const TimerSetter = ({ value, onInputChange }) => {
  const inputWidth = `${value}`.length
  return (
    <div>
      <Span>Set meditation for</Span>
      <Input type="text" value={value} style={{ width: `${inputWidth}ch` }} onChange={onInputChange} />
      <Span>minutes</Span>
    </div>
  )
}

TimerSetter.propTypes = {
  value: PropTypes.number.isRequired,
  onInputChange: PropTypes.func.isRequired,
}
