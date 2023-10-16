import OneFolderItem from './OneFolder'


export default function Folders({ fileStructure }) {
  return (
    <>
      {Object.keys(fileStructure.folders).map((folder, index) => (
        <OneFolderItem key={index} folder={folder} fileStructure={fileStructure.folders}/>
      ))}
    </>
  );
}
