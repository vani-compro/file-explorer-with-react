import { Button, Box,  IconButton, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import '../App.css';
import styled from 'styled-components';
import InputForm from './InputForm'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {useState} from 'react';
import Files from './Files';
import Folders from './Folders.js'

const StyledTypography = styled(Typography)`
  font-weight: 800 !important;
`

const StyledAngleRight = styled(ChevronRightIcon)`
  font-weight: 800 !important;
`

const StyledCreateDiv = styled.div`
  color: #bbb !important;
  position: absolute !important;
  right: 8rem;
`

const StyledIconButton = styled(IconButton)`
  color: #bbb !important;
`

const StyledBox = styled(Box)`
  color: #bbb;
  display: flex;
  justify-content: space-between;
`

const StyledDiv = styled.div`
  margin-left: 2rem;
`

/** functions **/

function InitialAppBar({fileStructure}) {

  const [arrowVisible, setArrowVisible] = useState(false);
  const [fileFormVisible, setFileFormVisible] = useState(false);
  const [fileNameVisible, setFileNameVisible] = useState(false);
  const [folderFormVisible, setFolderFormVisible] = useState(false);
  const [folderNameVisible, setFolderNameVisible] = useState(false);

  function nameButtonClicked(){
    setArrowVisible(!arrowVisible);
  }

  const handleClick = (what) => {
    if(!arrowVisible){
      nameButtonClicked();
    }
    if(what === 'file')
      setFileFormVisible(true);
    else
      setFolderFormVisible(true);
  }
  //console.log(fileStructure);

  return (
    <div>
      <StyledBox>
        <Button color="inherit" onClick={nameButtonClicked}>
          {!arrowVisible && <StyledAngleRight />}
          {arrowVisible && <ExpandMoreIcon />}
          <StyledTypography variant="body1">
            File Explorer
          </StyledTypography>
        </Button>

        <StyledCreateDiv>

          <StyledIconButton onClick={(event)=>handleClick("file")}>
            <NoteAddIcon />
          </StyledIconButton>

          <StyledIconButton onClick={(event)=>handleClick("folder")}>
            <CreateNewFolderIcon />
          </StyledIconButton>

        </StyledCreateDiv>

      </StyledBox>

      {(fileNameVisible && arrowVisible) && <StyledDiv>
        <Files fileStructure={fileStructure}></Files>
      </StyledDiv>}

      {(fileFormVisible && arrowVisible) && <StyledDiv>
        <InputForm setFormVisible={setFileFormVisible} setNameVisible={setFileNameVisible}  fileStructure={fileStructure} what='file' initialFileStructure={fileStructure}/>
      </StyledDiv>}

      {(folderNameVisible && arrowVisible) && <StyledDiv>
        <Folders fileStructure={fileStructure}></Folders>
      </StyledDiv>}

      {(folderFormVisible && arrowVisible) && <StyledDiv>
        <InputForm setFormVisible={setFolderFormVisible} setNameVisible={setFolderNameVisible}  fileStructure={fileStructure} what='folder' initialFileStructure={fileStructure}/>
      </StyledDiv>}


    </div>

  );
}

export default InitialAppBar;
