import React from 'react';
import Styles from './index.module.css';

interface Props {
  text: string, 
  selected?: boolean;
  clickHandler: (navIndex: number) => void;
  path: string;
  navIndex: number
}

const Crumb = ({ text, selected, navIndex, path, clickHandler } : Props) => {
  console.log(path);
  console.log(selected);
  return <span 
    className={Styles.color} 
    onClick={() => clickHandler(navIndex)}>
      {text} / 
    </span>
}

export default Crumb

