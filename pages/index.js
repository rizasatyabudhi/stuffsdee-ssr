import Head from 'next/head'
import React from 'react'
import '../assets/styles/index.css';
import '../assets/styles/grid.css';


export default class extends React.Component {
  // setGoogleTags() {
  //   return {
  //     __html: `
  //       window.dataLayer = window.dataLayer || [];
  //       function gtag(){dataLayer.push(arguments);}
  //       gtag('js', new Date());
  //       gtag('config', 'UA-131362726-1');
  //     `
  //   };
  // }

  render() {
    return (
      <div>
        <Head>
          <title>This page has a title 🤔</title>
          <meta charSet='utf-8' />
          <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          <meta property='og:title' content='Penyedia Jasa Layanan Gaya Hidup On Demand | GO-LIFE' />
          <meta property='og:url' content='https://www.go-life.co.id/' />
          <meta property='og:description' content='Aplikasi penyedia jasa layanan gaya hidup dengan 1 Juta pengguna di 16 kota. Temukan layanan pijat, kebersihan, mekanik, kecantikan, laundry, dan lainnya.' />
          {/*
            <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-131362726-1"
            />
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          */}
        </Head>
        <div className="App">


          <img style={{marginTop:50}} src="https://i.pinimg.com/564x/83/23/66/832366f69c087178414e994299c53a66.jpg" className="App-logo" alt="logo" />
          <h1 style={{marginBottom:0}}>Stuffsdee</h1>
          <p style={{fontSize:'30px',marginTop:'50px',marginBottom:'20px'}}>
            Our Collections
          </p>
            <div className="image-wrapper row">
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/9965bae3-a0a0-40c1-a3dc-5a9beb4a2a32/ScreenShot2018-12-20at11.26.58.png" alt=""/>
                <p className="harga">IDR 60,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/02e7a873-ab9f-4191-95e7-f5a89d37d27d/ScreenShot2018-12-20at11.27.11.png" alt=""/>
                <p className="harga">IDR 60,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/0aff3e89-13fe-4e8a-8a26-e010e88fd8c1/ScreenShot2018-12-20at11.27.30.png" alt=""/>
                <p className="harga">IDR 65,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/f5e9b355-7e50-4fd2-9112-5198706b6b8f/ScreenShot2018-12-20at11.33.07.png" alt=""/>
                <p className="harga">IDR 65,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/bc5ef59e-2ad1-473c-b515-184779b80723/ScreenShot2018-12-20at11.33.11.png" alt=""/>
                <p className="harga">IDR 65,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/a98d9a63-e80d-4f43-9b8a-8421784161cf/ScreenShot2018-12-20at11.33.36.png" alt=""/>
                <p className="harga">IDR 50,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/6f88278b-56a1-423d-9040-4e676b8d4df5/ScreenShot2018-12-20at11.33.41.png" alt=""/>
                <p className="harga">IDR 50,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/f17bc7bc-9db5-418d-86f5-7489af87a777/ScreenShot2018-12-20at11.33.47.png" alt=""/>
                <p className="harga">IDR 45,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/a8887ec0-9ed7-4439-9eef-b97a812d44d0/ScreenShot2018-12-20at11.33.58.png" alt=""/>
                <p className="harga">IDR 60,000</p>
              </div>
              <div className="col">
                <img className="image" src="https://go-life-public-integration.s3.ap-southeast-1.amazonaws.com/b4ab46b1-e2a9-4e5e-8b76-edd393334a09/ScreenShot2018-12-20at11.36.26.png" alt=""/>
                <p className="harga">IDR 60,000</p>
              </div>
            </div>
{/*
  <div style={{marginTop:'50px'}}>
  <a href="https://www.instagram.com/stuffsdee/" target="_blank" >
  <img src={instagram} alt="social-logo" className="social-logo" />
  </a>
  <a href="https://twitter.com/DeeStuffs" target="_blank" >
  <img src={twitter} alt="social-logo" className="social-logo" />
  </a>
  <a href="https://www.facebook.com/stuffs.dee.1" target="_blank" >
  <img src={facebook} alt="social-logo" className="social-logo" />
  </a>

  <p style={{fontSize:'25px',marginTop:'10px',marginBottom:'20px'}}>
  or message via Whatsapp 08788396675
  </p>

  </div>
*/}
      </div>
      </div>
    )
  }
}