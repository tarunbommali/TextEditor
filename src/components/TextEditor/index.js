import {Component} from 'react'
import {VscBold, GoItalic, AiOutlineUnderline} from 'react-icons/all'
import {
  MainContainer,
  TextEditorContainer,
  TextEditorImageContainer,
  TextEditorPreviewContainer,
  ItalicButton,
  UnderlineButton,
  BoldButton,
  UnOrderedContainer,
  ListItem,
  TextArea,
  Heading,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isUnderline: false, isItalic: false}

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isItalic, isBold, isUnderline} = this.state
    return (
      <MainContainer>
        <TextEditorContainer>
          <TextEditorImageContainer>
            <Heading>Text Editor</Heading>
            <img
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </TextEditorImageContainer>
          <TextEditorPreviewContainer>
            <UnOrderedContainer>
              <ListItem>
                <BoldButton
                  onClick={this.onClickBold}
                  data-testid="bold"
                  isBold={isBold}
                >
                  <VscBold size={25} />
                </BoldButton>
              </ListItem>
              <ListItem>
                <UnderlineButton
                  onClick={this.onClickUnderline}
                  data-testid="underline"
                  isUnderline={isUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </ListItem>
              <ListItem>
                <ItalicButton
                  onClick={this.onClickItalic}
                  data-testid="italic"
                  isItalic={isItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </ListItem>
            </UnOrderedContainer>

            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </TextEditorPreviewContainer>
        </TextEditorContainer>
      </MainContainer>
    )
  }
}

export default TextEditor
