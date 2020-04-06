import React from 'react';

const Crumb = ({ text, selected }: { text: string, selected: boolean }) => {
  return <a href="#" onClick={() => alert(selected)}>{text} / </a>
}

export default Crumb

