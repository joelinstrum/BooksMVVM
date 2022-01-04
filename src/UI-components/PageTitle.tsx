type Props = {
  title: string;
};

const PageTitle = ({ title }: Props) => {
  return (
    <h1
      style={{
        justifyContent: "center",
        display: "flex"
      }}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
