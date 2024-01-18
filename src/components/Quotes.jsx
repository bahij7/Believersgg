import React from 'react'
import Quote from './Quote'


function Quotes() {
    const QuoteArr = [
        {author: 'Salim Gharib', quote:"“Team believers team s3eb tl9a b7alha, drari m9atlin w3ndhoum strict vision. l'mr7ala li dwzt m3ahoum kanet special, 3amra khdma, w'fnefs 3amra dehk. They will be international one day, Just BELIEVE !!”", role: "BELIEVERS's Former player"},
        {author: 'Ahmed Bahij', quote:"“We'll keep fighting no matter what”", role:"BELIEVERS's Leader"},
        {author: 'Adam Kaddouri', quote:"“Nadyin w safe”", role: 'CPZEROs Leader'},
        {author: 'Wendy', quote:"“Lesgo”", role: "BELIEVERS's Manager"},
    ]
  return (
        <div className='quotes'>
            {QuoteArr.map((quote)=> <Quote author={quote.author} role={quote.role} quote={quote.quote}/>)}
        </div>
  )
}

export default Quotes