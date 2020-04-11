import React from 'react';
import Crumb from '../crumb/Crumb';

interface Props {
  crumbs: string[]
}

interface State {

}

export default class BreadCrumbs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    return (
      <div>
       {
         this.props.crumbs.map((crumb, index) => <Crumb key={index} text={crumb} selected={false} />)
       }
      </div>
    )
  }
}

