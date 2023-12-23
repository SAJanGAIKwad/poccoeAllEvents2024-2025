import React, { useState } from 'react'
import '../App.css';
import * as Components from '../Components';
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const IntroEvent = () => {

    const [signIn, toggle] = React.useState(true);
    return (
        <>
            <Components.Mcontainer>
                <ToastContainer/>
                <Components.Container className='Cbody'>
                    <Components.SignUpContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title >User Login</Components.Title>
                            <Components.Button>SignUP</Components.Button>
                            <Components.Button>SignIN</Components.Button>
                        </Components.Form>
                    </Components.SignUpContainer>

                    <Components.SignInContainer signinIn={signIn}>
                        <Components.Form>
                            <Components.Title>Admin Login</Components.Title>
                            <Components.Button >Sigin UP</Components.Button>
                            <Components.Button >Sigin In</Components.Button>
                        </Components.Form>
                    </Components.SignInContainer>
                    <Components.OverlayContainer signinIn={signIn}>
                        <Components.Overlay signinIn={signIn}>

                            <Components.LeftOverlayPanel signinIn={signIn}>
                                <Components.Title>Welcome Back!</Components.Title>
                                <Components.Paragraph>
                                    To keep connected with us please login with your personal info
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(true)}>
                                    Admin
                                </Components.GhostButton>
                            </Components.LeftOverlayPanel>

                            <Components.RightOverlayPanel signinIn={signIn}>
                                <Components.Title>Hello</Components.Title>
                                <Components.Paragraph>
                                    Enter Your personal details and start journey with us
                                </Components.Paragraph>
                                <Components.GhostButton onClick={() => toggle(false)}>
                                    User
                                </Components.GhostButton>
                            </Components.RightOverlayPanel>

                        </Components.Overlay>
                    </Components.OverlayContainer>
                </Components.Container>
            </Components.Mcontainer>
        </>
    )
}

export default IntroEvent