import React  , {useState , useEffect}from 'react'
import axios from 'axios'
import { Container , Row , Col} from 'reactstrap'
import {random , commerce} from 'faker'
import CartItem from './CartItem'
const url = 'https://myjson.dit.upm.es/api/bins/fd2l'
function BuyPage({addInCart}) {
    const [products , setProducts] = useState([])
    const fetchPhotos = async ()=>{
        const {data}  = await axios.get(url , {})
        const {photos} = data

        const addProduct = photos.map(photo=>({
        smallImage : photo.src.medium,
        tinyImage : photo.src.tiny,
        productName : random.word(),
        productPrice : commerce.price(),
        id : random.uuid()
        }))
        setProducts(addProduct)
    }

    useEffect(()=>{
        fetchPhotos()
    } , [])
  return (
    <Container fluid>
        <h1 className='text-success text-center'>
            Buy Page
        </h1>
        <Row>
            {products.map(product=>(
                <Col key={product.id} md={4}>
                    <CartItem product={product} addInCart = {addInCart}/>
                </Col>
            ))}
        </Row>
    </Container>
  )
}

export default BuyPage