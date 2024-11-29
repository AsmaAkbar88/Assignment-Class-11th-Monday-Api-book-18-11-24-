import { NextResponse } from "next/server";    //jab bhi hm apny server py kam krty hen tu phly sy bny howy 2 function huty hen 1 nextresponse or nextRequest. jo hmy external  API ko call krny main help krty hen .

const API_ENDPOINT = "https://jsonplaceholder.typicode.com/posts";

export const GET = async () => {  //hm jo hy Get ka 1 functin bnae gy
    const response = await fetch(API_ENDPOINT) //fetch jo hy Data ko lyny krny main madad deta hy  
    // 1 sth boht sari cheezain chal rhi huti hen agr hmy kisi spacific data ko => call krwna hy tu hmy await use krty hn 

    if (!response.ok) {  // agr hmra response OK hy tu ...

        return NextResponse.json({ success: false }, { status: 501 })
    }

    const data = await response.json()   ///parsing the data from Api
    // console.log(data)

    // new Response()
    return NextResponse.json({ data: data }, { status: 200 })
};
//ye basic si API hy
