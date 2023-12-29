import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #25262c;
  height: 100vh;
`
export const TextEditorContainer = styled.div`
  display: flex;
  padding: 15px;
  justify-content: center;
  align-items: center;
  background-color: #1b1c22;
`

export const TextEditorImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextEditorPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
`
export const BoldButton = styled.button`
  border: none;
  cursor: pointer; /* corrected property name */
  border-radius: 15px;
  padding: 16px;
  background-color: transparent;
  color: ${props => (props.isBold ? '#faff00' : '#ffffff')};
`

export const ItalicButton = styled.button`
  border: none;
  cursor: pointer; /* corrected property name */
  border-radius: 15px;
  padding: 16px;
  background-color: transparent;
  color: ${props => (props.isItalic ? '#faff00' : '#ffffff')};
`

export const UnderlineButton = styled.button`
  border: none;
  cursor: pointer; /* corrected property name */
  border-radius: 15px;
  padding: 16px;
  background-color: transparent;
  color: ${props => (props.isUnderline ? '#faff00' : '#ffffff')};
`

export const UnOrderedContainer = styled.ul`
  display: flex;
`
export const ListItem = styled.li`
  font-size: 48px;
  list-style: none;
  margin: 5px;
`

export const Heading = styled.h1`
  color: #ffffff;
`

export const TextArea = styled.textarea`
  rows: 25;
  columns: 75;
  height: 100%;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'none')};
`
