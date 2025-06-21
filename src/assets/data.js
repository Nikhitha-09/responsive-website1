import p1_img from '../assets/p1.jfif'
import p2 from '../assets/3.jpg'
import p3_img from '../assets/p3.avif'
import p4 from '../assets/p4.png'

let data_product= [
     {
            id: 1,
            name: "Kurti",
            category: "women",
            image: p1_img,
            new_price: 50.0,
            old_price: 80.5
        },
    
        { id: 2, name: "Jeans", category: "men", image:p2, new_price: 60.0, old_price: 90.5 },
        { id: 3, name: "Dress", category: "women", image:p3_img, new_price: 75.0, old_price: 120.0 },
        { id: 4, name: "Jacket", category: "men", image: p4, new_price: 90.0, old_price: 140.0 }
]

export default data_product;
