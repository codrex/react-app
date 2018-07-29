dropping random thought

-- React compoonented should be divided into two major part

1.  Logicless component: this component should just have html/jsx, they should not have any form of
    logic or what soever
2.  Stateful component: should have no markup of it own, it should only be concerned about the logic
    it is implementing.

    Benefits of taking this approach are:

    1.  Reusability
    2.  Seperation of concerns
    3.  Single responsiblity principle
    4.  Make testing react component easy and more effective
    5.  Easy to maintaine and follow
