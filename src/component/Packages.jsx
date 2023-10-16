import horizontal from '../css/MainBody.module.css'
import classes from '../css/Package.module.css'
const Packages = () => {
  return (
    <div>
        <h3>Packages</h3>
        <hr className={horizontal.hr}/>
        <p>Some text our prices. Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure</p>
        <div className={classes.PriceTables}>
            <div className={classes.PriceTable1}>
                <table>
                    <tr>
                        <th style={{backgroundColor:"rgb(97,97,97)"}}>Basic</th>
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
                        <td style={{borderBottom:"none"}} >$199</td>
                    </tr>
                    <tr>
                        <td  style={{color:"grey"}}>per room</td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="sign up"/></td>
                    </tr>
                </table>
            </div>
            <div className={classes.PriceTable2}>
                <table>
                    <tr>
                        <th style={{backgroundColor:"rgb(244,67,54)"}}>Pro</th>
                    </tr>
                    <tr>
                        <td>Floorplanting</td>
                    </tr>
                    <tr>
                        <td>50-hours support</td>
                    </tr>
                    <tr>
                        <td>Photography</td>
                    </tr>
                    <tr>
                        <td>50% Furniture Discount</td>
                    </tr>
                    <tr>
                        <td>Good Deals</td>
                    </tr>
                    <tr>
                        <td style={{borderBottom:"none"}}>$249</td>
                    </tr>
                    <tr>
                        <td  style={{color:"grey"}}>per room</td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="sign up"/></td>
                    </tr>
                </table>
            </div>

            </div>
        </div>

  )
}

export default Packages