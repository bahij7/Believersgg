import React, { useState } from 'react'
import Quote from './Quote'


function Quotes() {
    const QuoteArr = [
        {author: 'Ahmed Bahij', quote:"“No matter what comes our way, we'll keep fighting 🇲🇦⭐. #weBelieve”", role:"BELIEVERS's Leader"},
        {author: 'Salim Gharib', quote:"“Believers team s3eb tl9a b7alha, drari m9atlin w3ndhoum Strict Vision. l'mr7ala li dwzt m3ahoum kanet Spécial, 3amra khdma, w'fnefs lw9t 3amra dehk. They will be international one day, Just Believe! ⭐”", role: "BELIEVERS's Former player"},
        {author: 'Adam Kaddouri', quote:"“Believers squad intégré bzf o khdama 3la rasha katban liya ghada f tri9 mzyana  bl3b li kadir o l3b li kaydir kol membre f squad, saraha kanchofha mn squadat li professionel fga3 les cotes. #WeAreCPZERO 🏆”", role: "CPZERO's Leader"},
    ]
    const QuoteArr2 = [
        {author: 'Wendy', quote:"“Believers team li ktqatel w 3ndha ro7 tanafos, khdemt meahom : team Disciplined, mknlqach meahom hta problem w baghen ewslo lhadf dylhum. Believers The best team 🙌”", role: "BELIEVERS's Manager"},
        {author: 'Shoto', quote:"“Tla9it m3a squad Believers Aktar mn mara w atwal fatra kent fi clan ONE TEAM, kent min bin a9wa squadet w aktar squad sérieux w ya7drou fil wa9t.Netmanelhom kol 5iir w nchalah nchoufouh chi nhar fi liga w ycharfouna. 👏”", role: "ONETEAM's Co-Leader"},
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
                <button onClick={handleQuotes}>{open? 'Hide': 'See More'}</button>
            </div>

        </div>
  )
}

export default Quotes