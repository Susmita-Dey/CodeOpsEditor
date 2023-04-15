import React from "react";
import Select from "react-select";
// import monacoThemes from "monaco-themes/themes/themelist";
import { customStyles } from "../../constants/customStyles";
import { monacoThemes } from "@/lib/defineTheme";

const ThemeDropdown = ({ handleThemeChange, theme }) => {
  return (
    <Select
      placeholder={`Select Theme`}
      options={Object.entries(monacoThemes).map(([themeId, themeName]) => ({
        label: themeName,
        value: themeId,
        key: themeId,
      }))}
      styles={customStyles}
      defaultValue={monacoThemes[0]}
      value={theme}
      onChange={handleThemeChange}
    />
  );
};

export default ThemeDropdown;