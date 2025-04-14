import React from 'react'
import { Link } from 'react-router-dom'


function SignUp() {
    return (
        <div className='col'>
            <h1 style={{textAlign:"center"}}>Sign Up</h1>
                <div style={{backgroundColor:"pink", display:"flex", flexDirection:'column', marginLeft:"20%", marginRight:"20%", paddingBottom:"20px", borderRadius:"10px"}}>
                    <div className="container mt-3">
                        <div style={{display:"flex", flexDirection:"column"}}>
                            <label style={{ marginBottom:"5px"}}>Name</label>
                            <input type="text" class="form-control" placeholder="name" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                            <label style={{ marginBottom:"5px"}}>Email</label>
                            <input type="email" class="form-control" placeholder="email" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <div style={{display:"flex", flexDirection:"column", marginTop:"10px"}}>
                            <label style={{ marginBottom:"5px"}}>Password</label>
                            <input type="password" class="form-control" placeholder="password" aria-label="Username" aria-describedby="addon-wrapping"/>
                        </div>
                        <button type="button" className="btn btn-primary" style={{marginTop:"10px"}}>Sign Up </button>
                        <span style={{marginLeft:"10px"}}>Already have an account?<Link to="/">Login</Link></span>    
                    </div>
                </div>
          </div>
      )
    }
    
    export default SignUp
