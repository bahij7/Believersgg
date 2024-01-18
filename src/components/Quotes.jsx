import React, { useState } from 'react'
import Quote from './Quote'


function Quotes() {
    const QuoteArr = [
        {author: 'Ahmed Bahij', quote:"“No matter what comes our way, we'll keep fighting 🇲🇦⭐. #weBelieve”", role:"BELIEVERS's Leader"},
        {author: 'Salim Gharib', quote:"“Team believers team s3eb tl9a b7alha, drari m9atlin w3ndhoum strict vision. l'mr7ala li dwzt m3ahoum kanet special, 3amra khdma, w'fnefs lw9t 3amra dehk. They will be international one day, Just BELIEVE !!”", role: "BELIEVERS's Former player"},
        {author: 'Adam Kaddouri', quote:"“Believers squad intégré bzf o khdama 3la rasha soit f botolat diyal clan soit f botolat berra lclan o hiya ghada f tri9 mzyana  bl3b li kadir o l impact diyal kol membre f squad, saraha kanchofha mn squadat li professionel fga3 les cotes. #WeAreCPZERO 🏆”", role: "CPZERO's Leader"},
    ]
    const QuoteArr2 = [
        {author: 'Wendy', quote:"“Lesgo”", role: "BELIEVERS's Manager"},
        {author: 'Shoto', quote:"“A good team”", role: "ONETEAM's Co-Leader"},
    ]

    const [open, setOpen] = useState(false);
    const handleQuotes = ()=>{
        setOpen(!open)
    }
  return (
        <div className='quotes'>
           <div className="quotes-head">
            <h2><span>Insights</span> from Those Who Walked the <span>Path With Us.</span></h2>
           </div>

            {QuoteArr.map((quote)=> <Quote author={quote.author} role={quote.role} quote={quote.quote}/>)}
            {open && QuoteArr2.map((quote)=> <Quote author={quote.author} role={quote.role} quote={quote.quote}/>)}
            <div className="quote-btn">
                <button onClick={handleQuotes}>{open? 'Hide All': 'See More'}</button>
            </div>

        </div>
  )
}

export default Quotes