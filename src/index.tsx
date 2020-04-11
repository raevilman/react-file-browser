import * as React from "react";
import styles from "./styles.module.css";
import data2 from "./data2.json";
import BreadCrumbs from "./components/bread-crumbs/BreadCrumbs";
import Folder from "./components/folder/Folder";
import SectionHeading from "./components/section-heading/SectionHeading";

interface Props {
  text: string;
}

interface State {
  selectedKey: number;
  currentFolderList: string[];
  currentFilesList: string[];
  currentPath: string;
}

export class ReactFileBrowser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      selectedKey: 0,
      currentFolderList: [],
      currentFilesList: [],
      currentPath: ""
    };
  }

  componentDidMount() {
    this.populateFolderList(data2);
  }

  populateFolderList = (folders: {}) => {
    this.setState(
      {
        currentFolderList: Object.keys(folders).filter(
          key => !folders[key].__file__
        )
      },
      () => this.populateFileList(folders)
    );
  };

  populateFileList = (folder: {}) => {
    this.setState({
      currentFilesList: Object.keys(folder).filter(key => folder[key].__file__)
    });
  };

  handleFolderClick = (folderName: string, path: string) => {
    console.log("CURRENT PATH", this.state.currentPath);
    console.log("PATH", path);

    const pathReducer = (acc: string, curr: string) => acc[curr];

    const data = path.split("/").reduce(pathReducer, data2);

    this.setState({
      currentPath:
        this.state.currentPath != ""
          ? [this.state.currentPath, folderName].join("/")
          : folderName
    });

    this.populateFolderList(data);
  };

  render() {
    return (
      <div>
        <div className={styles.container}>
          <section className={styles.breadsSection}>
            <BreadCrumbs crumbs={["src", "component", "bread-crums"]} />
          </section>
          <main className={styles.mainSection}>
            <section className={styles.foldersSectionPassive}>
              <SectionHeading text="folders under `aws`" />
              <div className={styles.foldersList}></div>
            </section>
            <section className={styles.foldersSectionActive}>
              <SectionHeading text="folders under `aws`" />
              <div className={styles.foldersList}>
                {this.state.currentFolderList.map((folderName, index) => (
                  <Folder
                    key={index}
                    folderName={folderName}
                    path={
                      this.state.currentPath != ""
                        ? [this.state.currentPath, folderName].join("/")
                        : folderName
                    }
                    clickHandler={this.handleFolderClick}
                  />
                ))}
              </div>
            </section>
            <section className={styles.filesSection}>
              <SectionHeading text="files under `aws`" />
              <div className="filesList">
                {this.state.currentFilesList.map((fileName, index) => (
                  <p key={index}>{fileName}</p>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    );
  }
}
