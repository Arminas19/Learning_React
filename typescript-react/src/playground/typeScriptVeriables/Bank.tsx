interface Props{
bank: string;
creditCard: number;
vipmember: boolean;
name: string;
}

export const Bank = (props: Props) => {
return (
    <div>
        <h1> Bank: {props.bank}</h1>
        <h1> Credit Card Number: {props.creditCard} </h1>
        <h1> Vip Member: {props.vipmember? `${props.name} Is Vip Member` : `${props.name}Is Not Vip Member`}</h1>
    </div>
);
}
