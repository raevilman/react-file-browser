import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import data2 from "./data2.json";
import BreadCrumbs from "./components/bread-crumbs/BreadCrumbs";
import Folder from "./components/folder/Folder";
import SectionHeading from "./components/section-heading/SectionHeading";

export function ReactFileBrowser() {

  const [currentFolderList, setCurrentFolderList] = useState<string[]>([]);
  const [currentFilesList, setCurrentFilesList] = useState<string[]>([]);
  const [currentPathArr, setCurrentPathArr] = useState<string[]>([]);
  const [currentPath, setCurrentPath] = useState<string>("");
  const [currentFolderName, setCurrentFolderName] = useState<string>("");

  useEffect(() => {
    populateFoldersAndFiles(data2);
  }, [])

  useEffect(() => {
    setCurrentPath(currentPathArr.join('/'));
    updateView();
  }, [currentPathArr])

  const populateFoldersAndFiles = (folders: {}) => {
    const folderList: string[] = Object.keys(folders).filter(
      key => !folders[key].__file__
    )
    setCurrentFolderList(folderList)
    const filesList = Object.keys(folders).filter(key => folders[key].__file__);
    setCurrentFilesList(filesList);
  }

  const updateView = () => {
    const pathReducer = (acc: string, curr: string) => acc[curr];
    const folderData = currentPathArr.reduce(pathReducer, data2);
    populateFoldersAndFiles(folderData);
  }

  const handleFolderClick = (folderName: string, path: string) => {
    console.log(path);
    setCurrentPathArr(currentPathArr.concat(folderName))
    setCurrentFolderName(folderName)
  };

  const handleNavigation = (navIndex: number) => {
    setCurrentPathArr(currentPathArr.splice(0, navIndex+1))
  }

  return (
    <div>
      <div className={styles.container}>
        <section className={styles.breadsSection}>
          <BreadCrumbs 
            path={currentPathArr} 
            navigationHandler={handleNavigation}
          />
        </section>
        <main className={styles.mainSection}>
          <section className={styles.foldersSectionPassive}>
            <SectionHeading text={`folders under ${currentFolderName}`} />
            <div className={styles.foldersList}></div>
          </section>
          <section className={styles.foldersSectionActive}>
            <SectionHeading text={`folders under ${currentFolderName}`} />
            <div className={styles.foldersList}>
              {currentFolderList.map((folderName, index) => (
                <Folder
                  key={index}
                  folderName={folderName}
                  path={currentPath}
                  clickHandler={handleFolderClick}
                />
              ))}
            </div>
          </section>
          <section className={styles.filesSection}>
            <SectionHeading text={`files under ${currentFolderName}`} />
            <div className="filesList">
              {currentFilesList.map((fileName, index) => (
                <p key={index}>{fileName}</p>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}