import horizontal from '../css/MainBody.module.css'
const Packages = () => {
  return (
    <div>
        <h3>Packages</h3>
        <hr className={horizontal.hr}/>
        <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
        <div className={classes.PriceTables}>
            <div className={classes.PriceTable1}>
                <Table>
                    <tr>
                        <th style={{backgroundColor:rgb(97,97,97)}}>Basic</th>
                    </tr>
                    <tr>
                        <td>Floorplanting</td>
                    </tr>
                    <tr>
                        <td>10-hours support</td>
                    </tr>
                    <tr>
                        <td>Photography</td>
                    </tr>
                    <tr>
                        <td>20% Furniture Discount</td>
                    </tr>
                    <tr>
                        <td>Good Deals</td>
                    </tr>
                    <tr>
                        <td class="active">$199</td>
                    </tr>
                    <tr>
                        <td  style="color:grey;">per room</td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="sign up"/></td>
                    </tr>
                </Table>
            </div>
            <div className={classes.PriceTable2}>

            </div>
        </div>
    </div>
  )
}

export default Packages