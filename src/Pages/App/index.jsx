import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'

function App() {

  return (
      <div className='bg-red-700'>
          Hola Bruno
          <Home></Home>
          <MyAccount></MyAccount>
          <MyOrder></MyOrder>
          <MyOrders></MyOrders>
          <NotFound></NotFound>
          <SignIn></SignIn>
      </div>
        
  )
}

export default App
