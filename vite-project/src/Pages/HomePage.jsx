import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout.jsx";
import Bloglist from "../Component/Bloglist.jsx";
import { postLatest} from "../APIRequest/ApiRequest.js";
import Loder from "../Component/Loder.jsx";

const HomePage = () => {

    const [list,setList]=useState(null);

    useEffect(()=>{
        (async ()=>{
            let res=await postLatest()
            setList(res)
        })()
    },[])


    return (
        <Layout >
            {
             list===null?<Loder/>: <Bloglist list={list}/>
            }
        </Layout>
    );
};

export default HomePage;