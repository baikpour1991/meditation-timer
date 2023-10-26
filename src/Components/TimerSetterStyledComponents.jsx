import { styled } from 'styled-components'

export const Span = styled.span`
  color: var(--grayscale-title, #e1e1e6);
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
`

export const Input = styled.input`
  color: var(--grayscale-placeholder, #7c7c8a);
  background-color: transparent;
  border: none;
  border-bottom: 2px solid var(--grayscale-placeholder, #7c7c8a);
  padding: 10px 5px;
  margin: 0 5px;
  font-family: 'Roboto';
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  text-align: center;
  outline: none;
`
