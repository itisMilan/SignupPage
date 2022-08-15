import React,{useRef,useState} from 'react'
import {Form,Button,Card,Alert} from 'react-bootstrap'
import {useAuth} from '../Context/AuthContext'
import {Link,useNavigate} from 'react-router-dom'

function Login() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const { login } =useAuth();
    const [error,setError]=useState();
    const [loading,setLoading]=useState(false); 
    const navigate=useNavigate()

   async function handleSubmit(e){
        e.preventDefault()
    
        try{
            setError("");
            setLoading(true);
           await login(emailRef.current.value,passwordRef.current.value)
          navigate("/dashboard")
        }
        catch {setError("Failed To log In")}
        setLoading(false);
    }
  return (
    <>
    <Card>
<Card.Body>
    <h2 className='text-center mb-4'>Log In</h2>
    {error && <Alert variant="danger">{error}</Alert>  }
    <Form onSubmit={handleSubmit}>
        <Form.Group id="email">
            <Form.Label>
                Email
            </Form.Label>
            <Form.Control type="email" ref={emailRef} required>

            </Form.Control>

        </Form.Group>
        <Form.Group id="password">
            <Form.Label>
                Password
            </Form.Label>
            <Form.Control type="password" ref={passwordRef} required>

            </Form.Control>

        </Form.Group>
       
        <Button disabled={loading} className="w-100 mt-2" type='submit'>
  Log In
        </Button>
    </Form>
    <div className='w-100 text-center mt-2 mb-2'><Link to='/forgot-password'>Forgot Password??</Link></div>
</Card.Body>
    <div className='w-100 text-center mt-2 mb-2'>Need An Account??<Link to='/signup'>
      Signup</Link></div>
    </Card>
    </>
  )
}

export default Login