const CashInflow = (props: any) => {
  return (
    <svg
      className={props?.className}
      width="36"
      height="36"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1.25"
        y="1.61035"
        width="33.5"
        height="33.5"
        rx="16.75"
        fill="#9FD702"
        fill-opacity="0.12"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M12.1641 23.3034L23.8307 11.6367"
        stroke="#08694A"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.1641 14.7451V23.3035H20.7224"
        stroke="#08694A"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.9219 27.0527H25.0885"
        stroke="#08694A"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CashInflow;
