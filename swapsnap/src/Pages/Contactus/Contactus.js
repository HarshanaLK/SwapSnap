import React, { useState } from 'react';
import { Input, InputGroup, InputLeftElement, Textarea, Button } from "@chakra-ui/react";
import { BsEnvelope } from 'react-icons/bs';
import { HiOutlinePhone } from 'react-icons/hi';
import './contactus.css';

const Contactus = () => {
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = () => {
        window.open(`mailto:mastertech@gmail.com?subject=Sample&body=${body}`);
    };




    return (
        <>
    

            <div className="contactUs">
                <div className="card-contact">
                    <div className="sendMsg">
                        <h4>Send Us A Message</h4>
                        <div className="inputContact">
                            <InputGroup width="450px">
                                <InputLeftElement pointerEvents="none" />
                                <Input value={email} onChange={e => setEmail(e.target.value)} type="text" color="black" placeholder="Your Email Address" />
                            </InputGroup>
                        </div>
                        <div className="textAreaCnt">
                            <Textarea value={body} onChange={e => setBody(e.target.value)} width="450px" color="black" placeholder="How Can We Help" height="200px" />
                        </div>
                        <div className="contentContact">
                            <Button onClick={handleSubmit} borderRadius="90px" backgroundColor="#03e9f4" size="180px" className="contactBtn">Submit</Button>
                        </div>
                    </div>
                    <div className="showAdrss">
                        <div className="box">
                            <div className="iconCtn"><HiOutlinePhone opacity="0.8" /></div>
                            <div className="adressCtn">
                                <h3>Tel No:</h3>
                                <p className="infoCtn">0371234567</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="iconCtn"><BsEnvelope opacity="0.8" /></div>
                            <div className="adressCtn">
                                <h3>E-Mail</h3>
                                <p className="infoCtn">info@Mastertech.lk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contactus;
