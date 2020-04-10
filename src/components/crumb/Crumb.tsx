import React from 'react';
import Styles from './index.module.css';

interface Props {
  text: string, 
  selected?: boolean
}

const Crumb = ({ text, selected } : Props) => {
  return <span className={Styles.color} onClick={() => alert(selected)}>{text} / </span>
}

export default Crumb

