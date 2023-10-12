import { AppBar,Button,  Toolbar, IconButton, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import '../App.css';
import styled from 'styled-components';

const StyledTypography = styled(Typography)`
  font-weight: 800 !important;
`

const StyledAngleRight = styled(ChevronRightIcon)`
  font-weight: 800 !important;
`

const StyledDiv = styled.div`
  color: #bbb !important;
  position: absolute !important;
  right: 8rem;
`

const StyledToolbar = styled(Toolbar)`
  width: 100%;
  position: relative;
`

const StyledIconButton = styled(IconButton)`
  color: #bbb !important;
`


const folderIconClicked = (id) => {
  alert('folder button clicked.' + id)
}

function InitialAppbar() {
  return (
    <AppBar color="transparent">
      <StyledToolbar>
        <Button color="inherit">
          <StyledAngleRight />
          <StyledTypography variant="body1">
            File Explorer
          </StyledTypography>
        </Button>

        <StyledDiv>

          <StyledIconButton>
            <NoteAddIcon />
          </StyledIconButton>

          <StyledIconButton onClick={()=>folderIconClicked(0)}>
            <CreateNewFolderIcon />
          </StyledIconButton>

        </StyledDiv>

      </StyledToolbar>
    </AppBar>
  );
}

export default InitialAppbar;
