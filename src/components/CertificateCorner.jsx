function CertificateCorner({ position }) {
  const positions = {
    tl: "top-4 left-4",
    tr: "top-4 right-4 rotate-90",
    br: "bottom-4 right-4 rotate-180",
    bl: "bottom-4 left-4 -rotate-90",
  };

  return (
    <svg
      className={`absolute ${positions[position]} w-20 h-20 text-yellow-500`}
      viewBox="0 0 100 100"
      fill="none"
    >
      <path
        d="M8 92V8h84"
        stroke="currentColor"
        strokeWidth="4"
      />

      <path
        d="M8 55
           C25 55 25 25 55 25
           C75 25 75 8 92 8"
        stroke="currentColor"
        strokeWidth="4"
      />

      <circle
        cx="25"
        cy="25"
        r="4"
        fill="currentColor"
      />

      <circle
        cx="55"
        cy="25"
        r="3"
        fill="currentColor"
      />

      <circle
        cx="25"
        cy="55"
        r="3"
        fill="currentColor"
      />
    </svg>
  );
}

export default CertificateCorner;