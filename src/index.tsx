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
        <div className={styles.container}>
          <section className={styles.breadsSection}>
            <BreadCrumbs 
              crumbs = {['src', 'component', 'bread-crums']}
            />
          </section>
          <main className={styles.mainSection}>
           <section className={styles.foldersSection}>
            <p>This is folder</p>
           </section>
           <section className={styles.filesSection}>
            <p>This is files</p>
           </section>
          </main>
        </div>
      </div>
    )
  }
}
