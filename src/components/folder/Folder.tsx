import React from 'react';
import Styles from './index.module.css';
import FolderIcon from '../folder-icon/FolderIcon'

interface Props {
  text: string
}

const Folder = ({ text } : Props) => {
  return (
    <div className={Styles.folderSvg}>
      <FolderIcon /> 
      <p>{text}</p>
    </div>
  )
}

export default Folder

