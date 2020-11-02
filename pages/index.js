import Head from 'next/head'
import Layout from './components/layout'
import Featch from 'isomorphic-unfetch'
import Prices from './components/prices'
const Index=(props)=>(
    <Layout>
        This is next js
        <Prices bpi_data={props.bpi_data}/>
    </Layout>
)

Index.getInitialProps=async function(){
    const res=await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');

    const data=await res.json();

    return {
        bpi_data: data
    }
}

export default Index