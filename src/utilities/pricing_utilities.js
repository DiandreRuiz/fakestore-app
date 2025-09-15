// Format for USD pricing
export const formatUSD = (num) => {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(num);
};
