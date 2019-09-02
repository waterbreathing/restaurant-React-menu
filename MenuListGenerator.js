const MenuListGenerator = (props) => {

    const singleDish = props.menuMain.map(elementMenu =>
        <DishMenu dish={elementMenu} key={elementMenu} click={props.click} wholeMenu={props.menuMain} />)

    return (
        <>
            <ul className='dishList'>
                {singleDish}
            </ul>
            <Cena menu={props.menuMain} />
        </>
    )

}