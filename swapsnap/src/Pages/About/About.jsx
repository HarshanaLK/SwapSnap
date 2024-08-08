import {Image} from '@chakra-ui/react'
import './aboutcss.css'
import image1 from './logo.png';



const About = () => {

    return (
        <>
            <title>About</title>
            <div className='headingA'>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <p>Welcome to SwapSnap(the "App"). AIfaceswap is an online face editor application that uses artificial intelligence algorithms to create a unique content (“Services”). We are committed to protecting and respecting your privacy. We take your privacy seriously and we will collect, process and use your personal information to provide the services only after obtaining your consent.
                    By downloading, using, accessing this App, you agree to this privacy policy which explains when, where, how and why we collect personal information about you, how we use the information, the conditions under which we may disclose it to others, your rights in respect of your personal information, as well as how we keep it secure.<br/>
                    SwapSnap Intellectual Property. Our Services and SwapSnap's proprietary text, graphics, images, illustrations, trademarks, trade names, page headers, button icons, scripts, and other content contained therein ("SwapSnap Content") are owned by SwapSnap or its subsidiaries or affiliated companies and are protected by copyright, patent, trade secret, and other intellectual property laws. Except as explicitly stated in these Terms, SwapSnap reserves all rights in and to our Services.
                    Use Restrictions. You may not: (a) sell or commercially use any part of our Services; (b) copy, reproduce, distribute, publicly perform or display any part of our Services; (c) modify or create derivative works based on our Services, including, without limitation, removing any proprietary rights notices; (d) reverse engineer, decompile, disassemble, or attempt to extract the source code of the Services (unless permitted by applicable law, despite this limitation); (e) distribute, transfer, sublicense, lease, lend, or rent the Services to any third party; or (f) use our Services other than as expressly provided in these Terms. The licenses granted to you by SwapSnap do not cover any third-party GIFs, videos, or other content available on the Services. Any use of our Services without our prior written permission is strictly prohibited and will terminate the license granted to you under these Terms.
                    </p>
                    <br></br>
                </div>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src={image1} />
                    </div>
            </div>          
        </>
    )
}

export default About
