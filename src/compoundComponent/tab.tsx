import * as React from "react";
import { useTabs } from "./tabs";

export interface ITabProps {
  /**
   * Unique label of Tab to show when clicked.
   */
  label: string;
  [x: string]: any
}

/**
 * This component allows changing of the active Tab.
 */
export const Tab: React.FC<ITabProps> = props => {
  const { setActiveTab } = useTabs();
  return (
    <div className="tab">
      <button onClick={() => setActiveTab(props.label)}>
        {props.children}
      </button>
    </div>
  );
};