import * as React from "react";
import { useTabs } from "./tabs";

export interface IPanelProps {
  /**
   * Unique identifier for this tab.
   */
  label: string;
  [x: string]: any
}

/**
 * Individual panel component.
 */
export const Panel: React.FC<IPanelProps> = props => {
  const { activeTab } = useTabs();
  return activeTab === props.label ? <div>{props.children}</div> : null;
};
