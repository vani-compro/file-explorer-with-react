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

  const [formVisible, setFormVisible] = useState(false);
  const [arrowVisible, setArrowVisible] = useState(false);
  const [fileNameVisible, setFileNameVisible] = useState(false);

  function nameButtonClicked(event){
    setArrowVisible(!arrowVisible);
  }

  const handleClick = (event, id, what) => {
    console.log('click handled.');
    setFormVisible(true);

  }

  console.log(fileStructure);
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

          <StyledIconButton onClick={(event)=>handleClick(event, 0, "file")}>
            <NoteAddIcon />
          </StyledIconButton>

          <StyledIconButton onClick={(event)=>handleClick(event, 0, "folder")}>
            <CreateNewFolderIcon />
          </StyledIconButton>

        </StyledCreateDiv>

      </StyledBox>

      {(fileNameVisible && arrowVisible) && <StyledDiv>
        <Files fileStructure={fileStructure}></Files>
      </StyledDiv>}

      {(formVisible && arrowVisible) && <StyledDiv>
        <InputForm setFormVisible={setFormVisible} setFileNameVisible={setFileNameVisible}  fileStructure={fileStructure}/>
      </StyledDiv>}


    </div>

  );
}

export default InitialAppBar;
