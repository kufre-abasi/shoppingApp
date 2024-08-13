type ContainProps = {
  children: React.ReactNode;
};

const ContainLayout = ({ children }: ContainProps) => {
  return (
    <div className="mx-auto max-w-[1260px] px-4 lg:px-16">
      {children}
    </div>
  );
};

export default ContainLayout;