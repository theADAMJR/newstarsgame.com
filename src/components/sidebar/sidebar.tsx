// components/sidebar.js
import { useState } from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.sidebar} ${isActive ? styles.active : ''}`}>
      <button className={styles.sidebarToggle} onClick={toggleSidebar}>
        Toggle Sidebar
      </button>
      <div className={styles.sidebarContent}>
        {/* Sidebar content goes here */}
      </div>
    </div>
  );
};

export default Sidebar;
