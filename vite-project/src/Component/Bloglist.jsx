import React from 'react';
import {Link} from "react-router-dom";
const Bloglist = (props) => {
    return (
        <div>
            <div className={'container mx-auto my-16 p-9  bg-gray-400'}>
                <div className={'grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-4 gap-6'}>
                    {
                        props.list.map((item,index)=>{
                            return(
                                <Link key={index.toString()} to={''} className={'card w-100 glass'}>
                                    <figure><img src={item["img"]} alt={'car?'}/></figure>
                                    <div className={'card-body'}>
                                        <h2 className={'card-title text-gray-50 '}>{item["title"]}</h2>
                                        <p className={'text-gray-50'}>{item["short"]}</p>

                                    </div>
                                </Link>
                            )
                        })
                    }
            </div>

        </div>
</div>
)
    ;
};

export default Bloglist;