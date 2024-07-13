import './Starrating.css';

const StarRating = ( {rating} ) => {  
    const fullStars = Math.floor(rating); 
    const decimalPart = Math.round((rating % 1) * 10); 
    console.log("fullstarts: ",fullStars,"halfStars: ",decimalPart);
    const stars = [];
    for (let i = 1; i <= fullStars; i++) { 
        stars.push(<div className='fullstar' key={i}>★</div>); 
    }
    if (decimalPart>0 && decimalPart<=5 && decimalPart !== undefined) { 
        stars.push(<div className="halfstar" key={fullStars + 1}>★</div>); 
    }
    else if (decimalPart >5 && decimalPart !== undefined) { 
        stars.push(<div className="fullstar" key={fullStars + 1}>★</div>); 
    }


    return (
        <>
             <div className="statrmaincontainer">                
                {stars}
             </div>
        </>
    );
}

export default StarRating;
