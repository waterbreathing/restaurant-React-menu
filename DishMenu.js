const DishMenu = (props) => {



    return <li
        className={props.dish.menuActive ? 'singleDish active' : 'singleDish'}
        onClick={() => props.click(props.wholeMenu, props.dish.menuId)} >
        {`* ${props.dish.menuName} - price ${props.dish.menuPrice} Euro`}
    </li>

}