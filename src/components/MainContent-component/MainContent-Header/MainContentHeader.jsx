import styled from 'styled-components'

const StyledMainContentHeader = styled.header`
  height: 80px;
  position: fixed;
`

export default function MainContentHeader() {
  return <StyledMainContentHeader>this is header</StyledMainContentHeader>
}