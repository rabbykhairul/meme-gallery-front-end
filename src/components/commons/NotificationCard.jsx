import React, { createRef, useEffect } from "react";

let timer = null;

const NotificationCard = (props) => {
  const { message = "", type = "loading" } = props;

  const cardRef = createRef();

  useEffect(() => {
    cardRef.current.classList.add("display-notification", "notification-" + props.type);
  }, [props.message, props.type]);

  useEffect(() => {
    if (props.type === "success" || props.type === "error") {
      clearTimeout(timer);
      timer = setTimeout(() => hideNotification(), 8500);
    }
  }, [props.type]);

  const hideNotification = () => cardRef.current.classList.remove("display-notification");

  return (
    <div className="notification-card" ref={cardRef} onClick={hideNotification}>
      {message}
    </div>
  );
};

export default NotificationCard;