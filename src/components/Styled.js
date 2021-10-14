import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: #3f3f3f;
`

export const Container = styled.section`
  width: 25%;
  height: 50vh;
  padding: 2%;
  margin: 5% 0 0;
  background: #eee;
  border-radius: 5px;
  filter: drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08));

  h1 {
    text-align: center;
  }
`
