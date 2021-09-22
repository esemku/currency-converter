import * as React from 'react';
import useStyles from './styles';

const IconUpDownArrows = (props: React.SVGProps<SVGSVGElement>) => {
  const styles = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={styles.root}
      {...props}
    >
      <path
        fill="#000"
        d="M7 6.6V20c0 .6.4 1 1 1s1-.4 1-1V6.6H7zm8 10.8V4c0-.6.4-1 1-1s1 .4 1 1v13.4h-2z"
      />
      <path
        fill="#000"
        d="M3 6.6h10L8.7 2.3c-.4-.4-1-.4-1.4 0L3 6.6zm8 10.8h10l-4.3 4.3c-.4.4-1 .4-1.4 0L11 17.4z"
        opacity="0.8"
      />
    </svg>
  );
};

export default IconUpDownArrows;
