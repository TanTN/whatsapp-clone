"use client";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import { Button } from "@mui/material";
import WhatsAppLogo from "../../../assets/whatsapplogo.png";

const StyledContainer = styled.div`
    height: 100vh;
    display: grid;
    place-items: center;
    background-color: whitesmoke;
`;

const StyledLoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
    background-color: whitesmoke;
    border-radius: 5px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
        0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const StyledImageWrapper = styled.div`
    margin-bottom: 50px;
`;

const Login = () => {
    return (
        <StyledContainer>
            <Head>Login</Head>
            <StyledLoginContainer>
                <StyledImageWrapper>
                    <Image
                        src={WhatsAppLogo}
                        alt="whatsapp Logo"
                        height={200}
                        width={200}
                    />
                </StyledImageWrapper>
                <Button
                    variant="outlined"
                    onClick={() => {
                        console.log("SIGNING IN");
                    }}
                >
                    Sign in with Google
                </Button>
            </StyledLoginContainer>
        </StyledContainer>
    );
};

export default Login;
