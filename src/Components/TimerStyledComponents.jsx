import { styled } from 'styled-components'

export const Div1 = styled.div`
  background: var(--platform-aliases-shape-principal, #202024);
  height: 100vh;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const Span = styled.span`
  color: #fff;
  font-family: 'Fira Mono';
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 52px;
`
export const Div2 = styled.div`
  display: flex;
  gap: 3px;
`
export const Button = styled.div`
  background-color: #6c38cc;
  box-sizing: border-box;
  border: none;
  display: flex;
  width: 648px;
  height: 64px;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #5e23cc;
    box-shadow: 0 0 5px 1px #7b55c2;
  }
  &:active {
    background-color: #3b1188;
    box-shadow: 0 0 5px 1px #452c72;
  }
`
export const Span2 = styled.span`
  background-image: ${(props) => props['data-background']};
  background-repeat: no-repeat;
  background-position: 0 50%;
  background-size: 20px 24px;
  padding-left: 30px;
  color: #fbfbfb;
  font-family: 'Roboto';
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`
export const Button2 = styled(Button)`
  background: url('./../public/stop.svg');
  background-color: #ff0000;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 85% 85%;
  box-sizing: border-box;
  width: 0;
  padding: 0 35px;
  position: absolute;
  left: 0;
  top: 0;
  &:hover {
    background-color: #ff1919;
    box-shadow: 0 0 15px #440000 inset;
  }

  &:active {
    background-color: #750101;
    box-shadow: 0 0 5px #270000 inset;
  }
`
