import React, {useState, useEffect} from "react";

const CardContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (id)=>{}
})

export default CardContext;