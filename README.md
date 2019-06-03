# My TicketSwap - Robert Langereis

*NOTE THIS PROJECT IS STILL IN DEVELOPMENT*
*We had 5 days to finish this final assignment, frontend and backend: https://github.com/robertlangereis/my-ticketswap-*

This is the frontend webapp is a replica of Ticketswap (basic features), by Robert Langereis, as a final (individual) assignment for the Codaisseur Academy. Dev tech used for this client-side webapp: 
- React / Redux
- JS/Node (incl. ES6)
- CSS

# Interesting features
* You can register and login as a user
* As a user you can create new events, for which you can add tickets (to be sold - but feature to sell not implemented)
* The most interesting feature was the showing of the "risk of fraud" a certain tickets has when it is on sale. The calculation of the fraud risk is done in the backend (for obvious security reasons) and calculates the following:
    1. If the ticket is the only ticket of the author, add 10%
    2. if the ticket price is lower than the average ticket price for that event, that's a risk
    3. if a ticket is X% cheaper than the average price, add X% to the risk
    4. if a ticket is X% more expensive than the average price, deduct X% from the risk, with a maximum of 10% deduction
    5. if the ticket was added during business hours (9-17), deduct 10% from the risk, if not, add 10% to the risk
    6. if there are >3 comments on the ticket, add 5% to the risk
    7. The minimal risk is 5% (there's no such thing as no risk) and the maximum risk is 95%.

# How to run this webapp:
1. Install the dependencies using npm install
2. Use npm run start to start the webapp. 
3. NOTE: this requires a working server/backend. For this, see repository: https://github.com/robertlangereis/my-ticketswap-backend
