import carrinho from '../images/icon-cart.svg'

const Botao = () => {
    return (
        <>
            <button className='botao'>
                <img src={carrinho} alt="" className='carrinho'/> 
                 <p>Add to Cart</p>

            </button>
        </>

    )
}

export default Botao