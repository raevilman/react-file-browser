import * as React from 'react'
import styles from './styles.module.css'
import * as data from './data.json';
import BreadCrumbs from './components/bread-crumbs/BreadCrumbs'

interface Props {
  text: string
}

export class ReactFileBrowser extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  componentDidMount() {
    console.log('mounted')
    console.log(data)
  }

  render() {
    return(
      <div>
        <div className={styles.test}>Example Component: {this.props.text}</div>
        <BreadCrumbs 
          crumbs = {['src', 'component', 'bread-crums']}
        />
      </div>
    )
  }
}
