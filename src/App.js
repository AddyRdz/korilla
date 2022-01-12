import React, { useState } from 'react';
import Receipt from './Receipt';
import './App.css';



function App() {
    const initialState = [
      {
        id: 1,
        person: 'Karolin',
        order: {
          main: 'Burrito',
          protein: 'Organic Tofu',
          rice: 'Purple Rice',
          sauce: 'Green Crack',
          toppings: ['Baby Bok Choy', 'Cucumber Kimchi'],
          drink: 'Korchata',
          cost: 22,
        },
        paid: false,
      },
      {
        id: 2,
        person: 'Jerrica',
        order: {
          main: 'Rice Bowl',
          protein: 'Ginger Soy Chix',
          rice: 'Sticky Rice',
          sauce: 'Korilla',
          toppings: ['Yuzu Pickled Sweet Pepper', 'Kale'],
          drink: 'Korchata',
          cost: 19,
        },
        paid: false,
      },
      {
        id: 3,
        person: 'Matt',
        order: {
          main: 'Salad Bowl',
          protein: 'Organic Tofu',
          rice: 'none',
          sauce: "K'lla",
          toppings: ['Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'],
          drink: 'Sparkling Blood Orange Soda',
          cost: 20,
        },
        paid: false,
      },
    ];


  const [receiptState, setReceiptState] = useState(initialState)
  console.log(receiptState)

  const hide = (paid) => {
      setReceiptState(...receiptState, !receiptState.paid)
  }

  return (
      <>
      <main>
          {
           receiptState.map((item) => {          
               return(
                   <Receipt key={item.id} person={ item.person } order={ item.order } main={ item.order.main } paid={item.paid} hide={hide}/>
                   )
            })
        }
    
        
      </main>
    </>
  );
}

export default App;
