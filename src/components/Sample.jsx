import React,{useEffect, useState} from 'react'
import {Container, Card, Form} from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Sample() {
    const [user, setUser] = useState({
        data:[],
        page:1,
        per_page:"",
        support:[],
        total:"",
        total_pages:"",
    });
    const [formData, setFormData] =useState({email:"",password:""})
    const [error, setError] =useState({email:"",password:""})
    const [auth, setAuth] = useState({token:""});

    useEffect(() => {
        if(auth?.token){
            callGetUserList(user?.page);
        }
    }, [auth?.token])
    const callGetUserList = async (page) =>{
        const URL = `https://reqres.in/api/users?page=${page}`
        const response = await fetch(URL);
        if(response?.status === 200){
            const resultData = await response?.json();
            setUser(resultData)
            console.log("response", resultData);
        }else{
            setUser({
                data:[],
                page:1,
                per_page:"",
                support:[],
                total:"",
                total_pages:"",
            })
        }
    }
    const validation = () =>{
        let value= true;
        if(formData?.email === ""){
            error.email = "enter email"
            value = false
        }
         if(formData?.password === ""){
            error.password = "enter password"
            value = false
        }
        setError((data)=>({...data, error}))
        return value
    }
    const callLoginUser =async () =>{
        if(validation()){
            const payload = {
                ...formData
            }
            const res = await fetch("https://reqres.in/api/login",{
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(payload)
            })
            if(res?.status === 200){
                const response = await res?.json();
                setAuth(response);
                alert("Login successfully")
            }else{
                alert("Invalid email and password")
            }
        }
    }
    const onChange =(e)=>{
        setFormData((data)=>({
            ...data,
            [e.target.name]:e.target.value
        }))
    }
    if(!auth?.token){
        return(
            <div className={"container "}>
                <div className={"pt-4 col-4 mx-auto"}>
                    <h5>Login Page</h5>
                    <div className={"card"}>
                        <div className={"card-body"}>
                            <div className="mb-3">
                                <Form.Text id="basic-addon1">Email</Form.Text>
                                <Form.Control
                                    placeholder="email"
                                    name={"email"}
                                    value={formData?.email}
                                    onChange={onChange}
                                />
                            </div>
                            <div className="mb-3">
                                <Form.Text id="basic-addon1">Password</Form.Text>
                                <Form.Control
                                    placeholder="password"
                                    name={"password"}
                                    type={"password"}
                                    value={formData?.password}
                                    onChange={onChange}
                                />
                                <span>{error?.password}</span>
                            </div>
                            <button className={"btn btn-primary"} onClick={callLoginUser}>Login </button>
                        </div>
                    </div>
                </div>
            </div>  
        )
    }
  return (
    <Container>
        <div className="row">
           {user?.data?.map((item, index)=>(
            <React.Fragment key={index}>
               <div className={"col-lg-3 col-6"}>
                    <Card>
                        <Card.Body>
                            <img alt={item?.first_name} src={item?.avatar} />
                            <Card.Title>{item?.email}</Card.Title>
                            <p><b>first name</b> {item?.first_name}</p>
                            <p><b>last name</b> {item?.last_name}</p>
                        </Card.Body>
                    </Card>
               </div>
            </React.Fragment>
           ))}
        </div>
    </Container>
  )
}
