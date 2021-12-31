/* eslint-disable jsx-a11y/alt-text */
import images from "../assets/images"

function Home(){
    return(
        <div>
            <div style={{float: 'left', marginRight: 30, marginBottom: 30}}>
                <img src={images.Product_1}/>
                
            </div>
            <div style={{float: 'left', marginRight: 30, marginBottom: 30}}>
                <img src={images.Product_2}/>
            </div>
            <div style={{float: 'left', marginRight: 30, marginBottom: 30}}>
                <img src={images.Product_3}/>
            </div>
        </div>
    )
}

export default Home()