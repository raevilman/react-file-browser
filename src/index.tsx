import * as React from 'react'
import styles from './styles.module.css'
import * as data from './data.json';
import BreadCrumbs from './components/bread-crumbs/BreadCrumbs'
import Folder from './components/folder/Folder';
import SectionHeading from './components/section-heading/SectionHeading';

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
    return (
      <div>
        <div className={styles.container}>
          <section className={styles.breadsSection}>
            <BreadCrumbs
              crumbs={['src', 'component', 'bread-crums']}
            />
          </section>
          <main className={styles.mainSection}>
          <section className={styles.foldersSectionPassive}>
              <SectionHeading text="folders under `aws`" />
              <div className={styles.foldersList}>
                <Folder text="I am first folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am last folder" />
              </div>

            </section>
            <section className={styles.foldersSectionActive}>
              <SectionHeading text="folders under `aws`" />
              <div className={styles.foldersList}>
                <Folder text="I am first folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am a folder with a really long name so that it messes up my developers effort" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am folder" />
                <Folder text="I am last folder" />
              </div>

            </section>
            <section className={styles.filesSection}>
              <SectionHeading text="files under `aws`" />

              <div className="filesList">
                <p>This is first files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is files 1</p>
                <p>This is last file</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    )
  }
}
