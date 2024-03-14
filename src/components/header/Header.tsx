import "./header.css";

interface Props {
  userName: string;
  onLogout: () => void;
}
const Header = ({ userName, onLogout }: Props) => {
  return (
    <div className="header">
      <span>Shopping Bag</span>
      <span>Welcome {userName}</span>
      <button className="my-button logout-button" onClick={onLogout}>
        Log Out
      </button>
    </div>
  );
};

export default Header;
