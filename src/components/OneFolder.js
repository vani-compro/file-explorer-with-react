import FolderIcon from '@mui/icons-material/Folder';
import styled from 'styled-components';
import { IconButton, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import { useState } from 'react';
import Files from './Files';
import Folders from './Folders.js';
import InputForm from './InputForm';


const StyledFileName = styled.p`
  display: inline !important;
  margin: 0.5rem;
`
const StyledIconButton = styled(IconButton)`
  color: #bbb !important;
`

const StyledNameButton = styled(Button)`
  background-color: transparent;
  color: #bbb !important;
  border: none;
  padding: 0 !important;
  font-weight: 800 !important;
`
const InlineDiv= styled.div`
  display: inline;
`

const ButtonDiv = styled(InlineDiv)`
  position: absolute !important;
  right: 8rem;
`

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`
export default function OneFolder({folder, fileStructure}){
  const [arrowVisible, setArrowVisible] = useState(false);
  const [fileFormVisible, setFileFormVisible] = useState(false);
  const [fileNameVisible, setFileNameVisible] = useState(false);
  const [folderFormVisible, setFolderFormVisible] = useState(false);
  const [folderNameVisible, setFolderNameVisible] = useState(false);


  const handleClick = (event, what) => {
    if(!arrowVisible){
      nameButtonClicked();
    }
    if(what === 'file')
      setFileFormVisible(true);
    else
      setFolderFormVisible(true);
  }

  const nameButtonClicked = (e) => {
    setArrowVisible(!arrowVisible);
  }
  return (
    <>
      <StyledDiv key={Math.random()}>
        <InlineDiv>
          <StyledNameButton onClick={nameButtonClicked}>
            <StyledIconButton>
              {!arrowVisible && <ChevronRightIcon />}
              {arrowVisible && <ExpandMoreIcon />}
            </StyledIconButton>
            <StyledIconButton>
              <FolderIcon />
            </StyledIconButton>
            <StyledFileName>{folder}</StyledFileName>
          </StyledNameButton>
        </InlineDiv>
        <ButtonDiv>
          <StyledIconButton onClick={(event)=>handleClick(event, "file")}>
            <NoteAddIcon />
          </StyledIconButton>

          <StyledIconButton onClick={(event)=>handleClick(event, "folder")}>
            <CreateNewFolderIcon />
          </StyledIconButton>
        </ButtonDiv>
      </StyledDiv>
      {(fileNameVisible && arrowVisible) && <StyledDiv>
        <Files fileStructure={fileStructure}></Files>
      </StyledDiv>}

      {(fileFormVisible && arrowVisible) && <StyledDiv>
        <InputForm setFormVisible={setFileFormVisible} setNameVisible={setFileNameVisible}  fileStructure={fileStructure} what='file'/>
      </StyledDiv>}

      {(folderNameVisible && arrowVisible) && <StyledDiv>
        <Folders fileStructure={fileStructure}></Folders>
      </StyledDiv>}

      {(folderFormVisible && arrowVisible) && <StyledDiv>
        <InputForm setFormVisible={setFolderFormVisible} setNameVisible={setFolderNameVisible}  fileStructure={fileStructure} what='folder'/>
      </StyledDiv>}
    </>
  )
}