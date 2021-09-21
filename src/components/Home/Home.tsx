import React from 'react';
import useStyles from './styles';

const Home: React.FC = () => {
  const styles = useStyles();

  return <div className={styles.root}>Home</div>;
};

export default Home;
