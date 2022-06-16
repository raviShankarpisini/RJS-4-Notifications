const Notification = (props) => {
  //  Write your code here.
  const { class, text, imageUrl } = props
  return (
  <div className={class}>
      <img src={imageUrl} />
      <p >{text}</p>
  </div>)
}

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <div className ="card-container">
      <Notification
        class="notification1 notification"
        text="Information Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      />
      <Notification
        class="notification2 notification"
        text="Success Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      />
      <Notification
        class="notification3 notification"
        text="Warning Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      />
      <Notification
        class="notification4 notification"
        text="Error Message"
        imageUrl="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
