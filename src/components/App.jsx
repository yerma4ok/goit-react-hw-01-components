import React from "react"
import user from '../info/user'
import statistics from '../info/data' 
import friends from '../info/friends'
import transactions from '../info/transactions'
import { Profile } from "./Profile/Profile"
import { Statistics } from "./Statistics/Statistics"
import { FriendList } from "./FriendList/FriendList"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory"

export const App = () => {
  return <>
    <Profile    username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats} />
    <Statistics title="Upload stats" statistics={ statistics } />
    <FriendList friends={ friends } />
    <TransactionHistory transactions={ transactions } />
  </>
}