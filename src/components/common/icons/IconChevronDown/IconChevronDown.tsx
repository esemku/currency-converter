import * as React from 'react';
import { colors } from 'theme';

const IconChevronDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="20"
      fill="none"
      viewBox="0 0 24 24"
      style={{ marginTop: 1 }}
      {...props}
    >
      <path
        fill={colors.grayOctonary}
        d="M11.434 12.734L7.25 8.55a1.06 1.06 0 00-1.5 1.5l5.543 5.543a1 1 0 001.414 0l5.543-5.543a1.06 1.06 0 10-1.5-1.5l-4.184 4.184a.8.8 0 01-1.132 0z"
      />
    </svg>
  );
};

export default IconChevronDown;
