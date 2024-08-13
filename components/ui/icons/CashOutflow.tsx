const CashOutflow = (props: any) => {
  return (
    <svg
      className={props?.className}
      width="32"
      height="32"
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
        fill="#F56630"
        fill-opacity="0.12"
        stroke="white"
        stroke-width="1.5"
      />
      <path
        d="M25.0781 27.0527H10.9115"
        stroke="#F56630"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.8359 11.6367L12.1693 23.3034"
        stroke="#F56630"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M23.8359 20.1951V11.6367H15.2776"
        stroke="#F56630"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CashOutflow;
