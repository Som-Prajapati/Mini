import React from "react";

const AppearanceSection = ({ theme, setTheme }) => {
  return (
    <div className="text-white w-[90%]">
      <h3 className="text-2xl font-bold mb-4">Appearance Settings</h3>
      
      {/* Light/Dark Mode Toggle */}
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2">Choose Theme</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value="light"
              checked={theme === "light"}
              onChange={() => setTheme("light")}
              className="form-radio text-blue-500"
            />
            Light Mode
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={theme === "dark"}
              onChange={() => setTheme("dark")}
              className="form-radio text-blue-500"
            />
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppearanceSection;