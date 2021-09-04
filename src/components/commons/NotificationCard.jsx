import React, { createRef, useEffect } from "react";

let timer = null;

const NotificationCard = (props) => {
  const { message = "", type = "loading", onClose = () => {} } = props;

  const cardRef = createRef();

  useEffect(() => {
    cardRef.current.classList.add("display-notification", "notification-" + type);
  }, [props.message, type, cardRef]);

  useEffect(() => {
    if (props.type === "success" || props.type === "error") {
      clearTimeout(timer);
      timer = setTimeout(() => hideNotification(), 8500);
    }
    // eslint-disable-next-line
  }, [props.type]);

  const hideNotification = () => {
    cardRef?.current?.classList.remove("display-notification");
    setTimeout(() => onClose(), 850);
  };

  return (
    <div className="notification-card" ref={cardRef} onClick={hideNotification}>
      {message}
    </div>
  );
};

export default NotificationCard;