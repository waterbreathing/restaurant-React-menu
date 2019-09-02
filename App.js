class App extends React.Component {
  state = {
    menuItems: [
      { menuId: 1, menuName: 'French Onion Soup', menuPrice: 5, menuActive: false },
      { menuId: 2, menuName: 'Caesar Salad', menuPrice: 10, menuActive: false },
      { menuId: 3, menuName: 'Grilled Salmon with Dill Sauce ', menuPrice: 15, menuActive: false },
      { menuId: 4, menuName: 'Eggplant Lasagne', menuPrice: 9, menuActive: false },
      { menuId: 5, menuName: 'Lemon Meringue Pie', menuPrice: 6, menuActive: false },
      { menuId: 6, menuName: 'Fruit Salade', menuPrice: 6, menuActive: false },
    ],
    cena: 17
  }

  handleClick = (dish, dishId) => {

    // console.log(this.state)
    // console.log(dish, dishId)

    const newMenu = dish.map(dish1 => {

      // console.log(dish1.menuName)
      if (dish1.menuId === dishId)
        return (
          { menuId: dish1.menuId, menuName: dish1.menuName, menuPrice: dish1.menuPrice, menuActive: !dish1.menuActive }
        )
      else return { menuId: dish1.menuId, menuName: dish1.menuName, menuPrice: dish1.menuPrice, menuActive: dish1.menuActive }
    }
    )

    this.setState({
      menuItems: newMenu
    })
  }


  render() {
    return (
      <>
        <Header />
        <MenuListGenerator menuMain={this.state.menuItems} click={this.handleClick} />
        {/* <Cena choise={this.state.menuItems} /> */}
      </>
    );
  }
}


