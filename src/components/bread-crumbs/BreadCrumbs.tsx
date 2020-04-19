import React from 'react';
import Crumb from '../crumb/Crumb';

interface Props {
  navigationHandler: (navIndex: number) => void;
  path: string[]
}

interface State {

}

export default class BreadCrumbs extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { navigationHandler } = this.props;
    const accumulatedPath: string[] = [];
    return (
      <div>
       {
         this.props.path.map((crumb, index) => {
           accumulatedPath.push(crumb);
            return (<Crumb 
            key={index} 
            text={crumb} 
            selected={false} 
            path={accumulatedPath.join("/")}
            navIndex={index}
            clickHandler={navigationHandler}
          />)
         })
       }
      </div>
    )
  }
}

