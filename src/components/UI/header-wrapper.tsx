type HeaderWrapperProps = {
  children: React.ReactNode;
  header: string;
  largeGap?: boolean;
};

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({
  children,
  header,
  largeGap = false,
}) => {
  return (
    <>
      <h2
        className={`sections-top-gap text-middle ${
          largeGap ? "sections-top-gap--large" : ""
        }`}
      >
        {header}
      </h2>
      {children}
    </>
  );
};

export default HeaderWrapper;
