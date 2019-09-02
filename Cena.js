const Cena = (props) => {
    console.log(props)
    let toPay = 0;

    props.menu.forEach(e => {
        // console.log(e)
        if (e.menuActive) toPay += e.menuPrice


    })
    return <p className='cena'>Total: {toPay} Euro</p>

}