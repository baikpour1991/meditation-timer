import { styled } from 'styled-components'
import PropTypes from 'prop-types'

export const Logo = ({ animationTrigger }) => {
  return (
    <Div data-angle={animationTrigger}>
      <Span1>{`<`}</Span1>
      <Span2>{`>`}</Span2>
    </Div>
  )
}

Logo.propTypes = {
  animationTrigger: PropTypes.number.isRequired,
}

const Div = styled.div`
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='44' height='50' viewBox='0 0 44 50' fill='none'%3E%3Cpath d='M1.84937 13.366L22 1.73205L42.1506 13.366V36.634L22 48.2679L1.84937 36.634V13.366Z' fill='%2316151B' stroke='%236C38CC' stroke-width='3'/%3E%3C/svg%3E")
    no-repeat;
  background-size: 50px 50px;
  width: 50px;
  height: 50px;
  color: #fff;
  text-align: center;
  font-family: 'Purple Purse';
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  transition: 0.4s;
  transform: rotate(${(props) => `${props['data-angle'] * 180}deg`});
`
const Span1 = styled.span`
  position: relative;
  top: 3%;
  left: 3%;
`
const Span2 = styled.span`
  position: relative;
  top: 17%;
  right: 3%;
`
