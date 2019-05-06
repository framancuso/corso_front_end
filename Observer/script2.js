// Create Publisher class
class Publisher {
    constructor() {
      this.subscribers = []; // and array to hold all subscribers
    }
    
    // method for adding new subscribers
    subscribe (topic, subscriber) {
      this.subscribers[topic] || (this.subscribers[topic] = []);
      this.subscribers[topic].push(subscriber);
    }
    
    // method for removing subscribers
    unsubscribe (topic, subscriber) {
      if (!this.subscribers[topic]) return;
  
      this.subscribers[topic] = this.subscribers[topic].filter((sub) => {
        return sub !== subscriber;
      });
    }
    
    // method for notifying subscribers
    publish(topic, message) {
      if (!this.subscribers[topic]) return; // return if that topic does not exist
      if (this.subscribers[topic].length <= 0) return; // return if there's no subscriber to that topic
      
      this.subscribers[topic].forEach((subscriber) => {
        subscriber(message); //executing each subscriber in the topic
      });
    }
  }
  
  const publisher = new Publisher(); // creating a publisher instance
  
  function welcomeMember(member) {
    console.log(`Hello ${member.firstname}!`);
  }
  
  function showConnectionStatus(status) {
    console.log(`Internet conection is ${status}`);
  }
  
  publisher.subscribe('members', welcomeMember); // subscribing the welcomeMember handler
  publisher.subscribe('network_conectivity', showConnectionStatus); // subscribing the showConnectionStatus handler
  
  
  publisher.publish('members', { firstname: 'Doe' })
  // Hello Doe!
  
  publisher.publish('network_conectivity', 'poor');
  // Internet conection is poor