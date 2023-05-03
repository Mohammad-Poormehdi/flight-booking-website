import { useCallback, useState } from "react";
import Button from "./Button";
const buttons = [
  { label: "خارجی", id: 1 },
  { label: "داخلی", id: 2 },
];
interface TabsProps {
  handleShowFlights: (label:string) => void;
}
const Tabs: React.FC<TabsProps> = ({ handleShowFlights }) => {
  const [activeTab, setActiveTab] = useState<string | undefined>();
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
            handleShowFlights(button.label);
          }}
        />
      ))}
    </div>
  );
};
export default Tabs;
