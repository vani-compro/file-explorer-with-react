import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { useState, useEffect } from 'react';

const StyledFileName = styled.p`
  display: inline !important;
  margin: 0.5rem;
`
const StyledIconButton = styled(IconButton)`
  color: #bbb !important;
`

export default function Files({ fileStructure, folderClicked='' }) {
  const [location, setLocation] = useState('');

  useEffect(()=>{
    if(folderClicked === ''){
      setLocation(fileStructure);
    }else if(folderClicked){
      setLocation(fileStructure[`${folderClicked}`]);
      // console.log(fileStructure[`${folderClicked}`]);
    }
  },[folderClicked, fileStructure]);

  // console.log(fileStructure)
  return (
    <>
      {location && location.files.map((file, index) => (
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
