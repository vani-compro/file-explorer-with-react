import { AppBar, Toolbar, Button, IconButton, Typography } from '@mui/material';
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

const ExplorerName = styled(IconButton)`
  color: #bbb !important;
  /* font-weight: 800 !important; */
`

const StyledCreateIcons = styled(IconButton)`
  color: #bbb !important;
  position: absolute !important;
  right: 2rem;
`

const StyledNoteIcon = styled(NoteAddIcon)`
  margin: 0 2rem;
`

function InitialAppbar() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <ExplorerName
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
        >
          <StyledAngleRight />
          <StyledTypography variant="body1">
            File Explorer
          </StyledTypography>
        </ExplorerName>
        <StyledCreateIcons color="inherit">
          <StyledNoteIcon/>
          <CreateNewFolderIcon />
        </StyledCreateIcons>
      </Toolbar>
    </AppBar>
  );
}

export default InitialAppbar;
