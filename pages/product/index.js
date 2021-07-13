import Link from 'next/link';

function ProductList({productId = 100}) {
    return (
        <>
            <Link href='/'>
                <a>Home</a>
            </Link>
            <h2>
                <Link href='/product/1'>
                    <a>Product 1</a>
                </Link>
            </h2>
            <h2>
                <Link href='/product/2'>
                    <a>Product 2</a>
                </Link>
            </h2>
            <h2>
                <Link href='/product/3' replace> {/*replace is used for when click back then we can assign a url*/}
                    <a>Product 3</a>
                </Link>
            </h2>
            <h2>
                <Link href={`/product/${productId}`}>
                    <a>Product {productId}</a>
                </Link>
            </h2>
        </>
    )
}

export default ProductList;