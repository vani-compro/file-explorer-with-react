import { TextField, Button, FormControl, IconButton } from "@mui/material";
import styled from 'styled-components';
import {useState} from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';

const StyledFormControl = styled(FormControl)`
  flex-direction: row !important;
`

const StyledIconButton = styled(IconButton)`
  color: #bbb !important;
`

const StyledTextField = styled(TextField)`
  background-color: #bbb !important;
  border-radius: 0.35rem;
  margin: 0.2rem 0.5rem !important;
`

export default function InputForm({setFormVisible, setNameVisible, fileStructure, what, folderClicked=''}){

  let [inputText, setInputText] = useState('');



  function handleSubmit(e){
    // console.log(e);
    setFormVisible(false);
    setNameVisible(true);
    if(folderClicked===''){
      if(what==='file'){
        // console.log( Object.keys(fileStructure), fileStructure.files, inputText);
        fileStructure.files.push(inputText);
      }else{
        // console.log(fileStructure, fileStructure.folders, inputText);
        fileStructure.folders[`${inputText}`] = {
          files: [],
          folders: {}
        }
      }
    }else if(folderClicked){
      if(what==='file'){
        // console.log( Object.keys(fileStructure), fileStructure.files, inputText);
        fileStructure[`${folderClicked}`].files.push(inputText);
      }else{
        // console.log(fileStructure, fileStructure.folders, inputText);
        fileStructure[`${folderClicked}`].folders[`${inputText}`] = {
          files: [],
          folders: {}
        }
      }
    }
    // console.log(fileStructure);
  }

  function handleChange(e){
    setInputText(e.target.value);
  }
  // console.log(fileStructure);
  return (
    <StyledFormControl>
      <StyledIconButton>
        {what === 'file'  ? <InsertDriveFileIcon /> : <FolderIcon />}
      </StyledIconButton>
      <StyledTextField id="filled-basic" placeholder="enter name" variant="standard" color="primary" value={inputText} onChange={handleChange}/>
      <Button type="submit" variant="contained" onClick={(e) => handleSubmit(e)}>Submit</Button>
    </StyledFormControl>
  );
}