import React, { createRef, useEffect } from "react";

const NotificationCard = (props) => {
  const { message = "", type = "loading" } = props;

  const cardRef = createRef();

  useEffect(() => {
    cardRef.current.classList.add("display-notification", "notification-" + type);
  }, [props.message, props.type]);

  const hideNotification = () => cardRef.current.classList.remove("display-notification");

  return (
    <div className="notification-card" ref={cardRef} onClick={hideNotification}>
      {message}
    </div>
  );
};

export default NotificationCard;