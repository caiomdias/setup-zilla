import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 36px;
    color: ${props => props.theme.colors.primary};
    margin-top: 36px;
  }

  p {
    margin-top: 16px;
    font-size: 24px;
    line-height: 32px;
  }
`
