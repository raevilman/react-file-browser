import React from 'react';
import Crumb from './Crumb';

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
         this.props.crumbs.map(crumb => <Crumb text={crumb} selected={false} />)
       }
      </div>
    )
  }
}

