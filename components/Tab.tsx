import { useCallback, useState } from "react";
import Button from "./Button";
const buttons = [
  { label: "خارجی", id: 1 },
  { label: "داخلی", id: 2 },
];
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("داخلی");
  const handleActiveTab = useCallback((label: string) => {
    setActiveTab(label);
  }, []);
  return (
    <div className="w-full flex gap-5 justify-center items-center bg-white rounded-xl px-3 py-2">
      {buttons.map((button) => (
        <Button
          key={button.id}
          label={button.label}
          active={activeTab === button.label}
          onClick={() => {
            setActiveTab(button.label);
          }}
        />
      ))}
    </div>
  );
};
export default Tabs;
