interface Amount{
    amount:number
}

export default function FormattedPrice({amount} : Amount) {
    const formattedAmount = new Number(amount).toLocaleString('en-US',{
        style:'currency',
        currency:'USD',
        maximumSignificantDigits : 2,
    })
    return (<span>{formattedAmount}</span>
    );
}

