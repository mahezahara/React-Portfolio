import { useEffect, useState } from "react";
import { MenuItem, Select } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LaptopIcon from "@mui/icons-material/Laptop";

import { applyTheme } from "../../themes/utils";
import baseTheme from "../../themes/base";
import darkTheme from "../../themes/dark";

function ThemeSelect() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [mode, setMode] = useState("system");

  if (mode === "system") {
    applyTheme(prefersDark ? darkTheme : baseTheme);
  }

  useEffect(() => {
    if (mode === "light") {
      applyTheme(baseTheme);
    } else if (mode === "dark") {
      applyTheme(darkTheme);
    } else {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const listener = (e) => applyTheme(e.matches ? darkTheme : baseTheme);
      applyTheme(mq.matches ? darkTheme : baseTheme);
      mq.addEventListener("change", listener);
      return () => mq.removeEventListener("change", listener);
    }
  }, [mode]);

  const handleChange = (event) => setMode(event.target.value);

  const renderIcon = () => {
    if (mode === "light") return <LightModeIcon />;
    if (mode === "dark") return <DarkModeIcon />;
    return <LaptopIcon />;
  };

  return (
    <Select
      value={mode}
      onChange={handleChange}
      variant="outlined"
      sx={{
        width: 48,
        height: 48,
        borderRadius: "50%",
        position: "fixed",
        bottom: 20,
        left: 20,
        zIndex: 1000,
        backgroundColor: "var(--background-color, #eee)",
        color: "var(--text-color, #000)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& .MuiSelect-select": {
          padding: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
        "& .MuiSelect-icon": {
          display: "none",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      renderValue={() => renderIcon()}
    >
      <MenuItem value="light">
        <LightModeIcon />
      </MenuItem>
      <MenuItem value="system">
        <LaptopIcon />
      </MenuItem>
      <MenuItem value="dark">
        <DarkModeIcon />
      </MenuItem>
    </Select>
  );
}

export default ThemeSelect;
