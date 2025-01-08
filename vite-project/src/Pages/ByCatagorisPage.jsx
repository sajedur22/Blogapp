import React, {useEffect, useState} from "react";
import Layout from "../Layout/Layout.jsx";
import {useParams} from "react-router-dom";
import {postBycetegori} from "../APIRequest/ApiRequest.js";
import Loder from "../Component/Loder.jsx";
import Bloglist from "../Component/Bloglist.jsx";


const ByCategoryPage = () => {

    let {categoryID}=useParams();
    const [list,setList]=useState(null)
    useEffect(()=>{
        (async ()=>{
            let res=await postBycetegori(categoryID)
            setList(res)
        })()
    },[categoryID])




    return (
        <Layout>
            {
                list===null?<Loder/>: <Bloglist list={list}/>
            }
        </Layout>
    );
};

export default ByCategoryPage;