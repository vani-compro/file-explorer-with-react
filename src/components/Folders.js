import OneFolderItem from './OneFolder'
import { useState, useEffect } from 'react';

export default function Folders({ fileStructure, folderClicked='' }) {
  const [location, setLocation] = useState('');

  useEffect(()=>{
    if(folderClicked === ''){
      setLocation(fileStructure);
    }else if(folderClicked){
      setLocation(fileStructure[`${folderClicked}`]);
      console.log(fileStructure[`${folderClicked}`]);
    }
  },[folderClicked, fileStructure]);
  return (
    <>
      {location && Object.keys(location.folders).map((folder, index) => (
        <OneFolderItem key={index} folder={folder} fileStructure={fileStructure.folders}/>
      ))}
    </>
  );
}
