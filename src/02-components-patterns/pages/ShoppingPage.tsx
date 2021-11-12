import { ProductCard } from "../components";


const product = {
    id: '1',
    title: 'Coffee Mug - Card',
    img: './coffee-mug.png',
};

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Page</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {/* <ProductCard product = { product }>
                    <ProductCard.Image />
                    <ProductCard.Title title= { '' } />
                    <ProductCard.Buttons increaseBy={function (value: number): void {
                                        throw new Error("Function not implemented.");
                                    }} counter={0} />
                </ProductCard> */}

                <ProductCard product = { product }>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

            </div>
        </div>
    )
}
