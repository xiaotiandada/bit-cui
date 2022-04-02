import React, { ReactNode } from "react";
import styles from "./index.module.scss";

export type NotificationProps = {
  /**
   * a node to be rendered in the special component.
   */
  children?: ReactNode;
};

export function Notification({ children }: NotificationProps) {
  return (
    <>
      <div className={styles.notification_error}>
        <strong>tips</strong>
        <span>{children}</span>
      </div>
      <br />
      <div className={styles.notification_warning}>
        <strong>tips</strong>
        {children}
      </div>
      <br />
      <div data-label="Tip" className={styles.hint}>
        {children}
      </div>
    </>
  );
}
