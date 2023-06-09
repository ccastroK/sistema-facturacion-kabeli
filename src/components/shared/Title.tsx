type TitleProps = {
  title: string;
  classname?: string;
};

export const Title = ({ title, classname }: TitleProps) => {
  return (
    <>
      <h1 className={classname}>
        {title}
      </h1>
    </>
  );
};
