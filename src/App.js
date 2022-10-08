import React , {Component} from "react";

class notifyme extends Component{
  constructor(){
    super();
    this.showNotification = this.showNotification.bind(this);
  }
  componentDidMount(){
    if(!("Notification" in window)){
      console.log("browser doesnt support");
    }else{
      Notification.requestPermission();
    }
  }
  showNotification(){
    new Notification("hi u have 1 notification");
    console.log("inside showNotification");
    console.log(Notification.permission);
  }

  render(){
    return(
      <div>
        <button onClick={this.showNotification}>Click for notification</button>

      </div>
    );
  }

}

export default notifyme;