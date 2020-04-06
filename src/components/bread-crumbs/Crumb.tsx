import React from 'react';

interface Props {
  text: string, 
  selected?: boolean
}

const Crumb = ({ text, selected } : Props) => {
  return <a href="#" onClick={() => alert(selected)}>{text} / </a>
}

export default Crumb

