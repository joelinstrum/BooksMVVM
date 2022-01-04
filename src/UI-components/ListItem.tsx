type Props = {
  title: string;
  subtitle?: string | number;
  handleClick?: () => void;
};

const ListItem = ({ title, subtitle, handleClick }: Props) => {
  return (
    <li onClick={handleClick} style={{ cursor: "pointer", marginBottom: 14 }}>
      <p style={{ fontWeight: "bold", fontSize: "18px", margin: 0 }}>{title}</p>
      {subtitle && <p style={{ margin: 0 }}>{subtitle}</p>}
    </li>
  );
};

export default ListItem;
