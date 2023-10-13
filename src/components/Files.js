import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import styled from 'styled-components';
import { IconButton } from '@mui/material';

const StyledFileName = styled.p`
  display: inline !important;
  margin: 0.5rem;
`
const StyledIconButton = styled(IconButton)`
  color: #bbb !important;
`

export default function Files({ fileStructure }) {
  return (
    <>
      {fileStructure.files.map((file, index) => (
        <div key={index}>
          <StyledIconButton>
            <InsertDriveFileIcon />
          </StyledIconButton>
          <StyledFileName>{file}</StyledFileName>
        </div>
      ))}
    </>
  );
}
