import "./header.css";
import Button from "@mui/material/Button";
import logoPlaceholder from "./assets/logo.svg";

const navItems = ["Home", "Service", "Work", "Blog", "Contact"];
export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
        <img  src={logoPlaceholder}  alt="fireSpot"/>
        </div>
        <div className="nav-item">
          {navItems.map((item) => (
            <Button key={item} sx={{ color: "#fff" }}>
              {item}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};
