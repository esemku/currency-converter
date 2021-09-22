import clsx from 'clsx';
import * as React from 'react';
import useStyles from './styles';

const IconLeftRightArrows = ({
  className,
  onClick,
}: React.SVGProps<SVGSVGElement>) => {
  const styles = useStyles();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={clsx(styles.root, className)}
      onClick={onClick}
    >
      <path
        fill="#000"
        d="M17.4 7H4c-.6 0-1 .4-1 1s.4 1 1 1h13.4V7zM6.6 15H20c.6 0 1 .4 1 1s-.4 1-1 1H6.6v-2z"
      />
      <path
        fill="#000"
        d="M17.4 3v10l4.3-4.3c.4-.4.4-1 0-1.4L17.4 3zM6.6 11v10l-4.3-4.3c-.4-.4-.4-1 0-1.4L6.6 11z"
        opacity="0.3"
      />
    </svg>
  );
};

export default IconLeftRightArrows;
