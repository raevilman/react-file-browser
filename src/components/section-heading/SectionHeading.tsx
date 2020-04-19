import React from 'react';
import Styles from './index.module.css';

interface Props {
  text: string
}

const SectionHeading = ({ text } : Props) => {
  return (
    <p className={Styles.sectionHeading}>{text}</p>
  )
}

export default SectionHeading

