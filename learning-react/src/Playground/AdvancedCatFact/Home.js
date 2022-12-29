import { useGetCat } from "./useGetCat";

export const Home = () => {
const {catData, isLoading, isError, refetchData} = useGetCat()

if(isError) {
    return <h1> Sorry, there was an error </h1>
}

if(isLoading) {
    return <h1>Loading...</h1>
}
    return (
        <div>
        <h1> Home Page </h1>
        <p> {catData?.fact}</p>
        <button onClick={refetchData}> Update Data</button>
        </div>
    );
};