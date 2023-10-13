import { TextField, Button, FormControl, IconButton } from "@mui/material";
import styled from 'styled-components';
import {useState} from 'react';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';

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

export default function InputForm({setFormVisible, setFileNameVisible, fileStructure}){

  let [inputText, setInputText] = useState('');

  function handleSubmit(){
    setFormVisible(false);
    // setFileName(inputText);
    setFileNameVisible(true);
    fileStructure.files.push(inputText);
  }

  function handleChange(e){
    setInputText(e.target.value);
  }
  return (
    // <StyledFormDiv>
      <StyledFormControl>
        <StyledIconButton>
          <InsertDriveFileIcon />
        </StyledIconButton>
        <StyledTextField id="filled-basic" placeholder="enter name" variant="standard" color="primary" value={inputText} onChange={handleChange}/>
        <Button type="submit" variant="contained" onClick={(e) => handleSubmit()}>Submit</Button>
      </StyledFormControl>
  );
}