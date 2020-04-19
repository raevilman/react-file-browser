import React from 'react';
import Styles from './index.module.css';
import FolderIcon from '../folder-icon/FolderIcon'

interface Props {
  folderName: string,
  clickHandler: (folderName: string, path: string) => void,
  path: string
}

const Folder = ({ folderName, clickHandler, path } : Props) => {
  return (
    <div className={Styles.folderSvg} onClick={() => clickHandler(folderName, path)}>
      <FolderIcon /> 
      <p>{folderName}</p>
    </div>
  )
}

export default Folder

