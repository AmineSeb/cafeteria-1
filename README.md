# cafeteria
A web app to organize orders in my cafeteria and make it faster.

## System Description
It is a webApp where we have two main actors:
- The Cafeteria Staff
- The students

The students will make their order online and avoid the long queue. They will be able to get instant feedback if their order cannot be done or be notified when their food is ready, so they can come and pay for it.

## Architecture Decision
We will go with the Layered Architectural pattern. In order to make separate business layers and enforce the separation of concerns.

## Design patterns 
- MVC: Because it goes best with the layered architecture.
- Singleton: To have one instance of the DAO.

## Functional Rquirements :
- Users should be able to make orders.
- Users should be able to deposit money on the cafeteria and add to their balance.
- Users should be able to know how much is their total order is. 
- The cafeteria Staff should get notified when an order arives and decide either to decline it or accept it.


## Non Functional Requirements:
- The system should be easy to use.
- The response of the cafeteria staff should get to the users in no time.
- The System should keep trace of the history of orders.
- altering with the balance of customers should be secured. 
