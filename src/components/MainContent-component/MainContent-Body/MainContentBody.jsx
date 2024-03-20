import styled from 'styled-components'

const StyledMainContentBody = styled.div`
  height: 80%;
  margin-top: 80px;
  flex-grow: 1;
  flex-shrink: 0;
`

export default function MainContentBody() {
  return <StyledMainContentBody>this is body</StyledMainContentBody>
}