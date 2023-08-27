import { BsGoogle,BsTwitter,BsFacebook,BsLinkedin,BsInstagram } from 'react-icons/bs'
import {BiSolidContact,BiCopyright} from 'react-icons/bi'
import {MdEmail} from 'react-icons/md'
import './index.css'

const Footer =() => {
    return (
        <div className='footer-cont' id='Contact'>
            <div className='container-fluid'>
                <div className='row mt-5 mb-2'>
                    <div className='icons-container mt-2 col-12 col-md-6 col-lg-4 order-0'>
                        <h1 className='text-center foot-head'>Idealabs</h1>
                        <div className='icons-cont'>
                            <div className='icon-cont'>
                                <BsGoogle className='icon'/>
                            </div>
                            <div className='icon-cont'>
                                <BsTwitter className='icon'/>
                            </div>
                            <div className='icon-cont'>
                                <BsFacebook className='icon'/>
                            </div>
                            <div className='icon-cont'>
                                <BsLinkedin className='icon'/>
                            </div>
                            <div className='icon-cont'>
                                <BsInstagram className='icon'/>
                            </div>
                        </div>
                        <p class='foot-para text-center'>Hyderabad, Telangana, India.</p>
                    </div>
                    <div class="icons-container col-12 col-md-6 col-lg-3 order-4 order-md-1">
                        <h1 class="mt-2 foot-head">Contact details</h1>
                        <div class="d-flex flex-row align-items-center">
                            <BiSolidContact />
                            <span class="foot-para ml-2">9876543210</span>
                        </div>
                        <div class="d-flex flex-row align-items-center">
                            <MdEmail />
                            <span class="foot-para">idealabs9999@gmail.com</span>
                        </div>
                    </div>
                    <div class="col-6 col-md-6 col-lg-2 order-2">
                        <h1 class="mt-2 foot-head">Contact with us</h1>
                        <p class="foot-para">
                            Email<br />
                            Twitter<br />
                            Facebook<br />
                            Linkedin<br />
                            Instagram</p>
                    </div>
                    <div class="col-6 col-md-6 col-lg-3 order-3">
                        <h1 class="mt-2 foot-head">Office & Address</h1>
                        <p class="foot-para">Akhila Exotica, 4th Floor<br />
                            Hydernagar,
                            Hyderabad,<br /> TS, 500072</p> 
                    </div>
                    <div class="col-12 order-5">
                        <hr class="line" />
                        <p class="text-center foot-para"><BiCopyright /> 2023 Idealabs Private Limited. All rights reserved.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Footer