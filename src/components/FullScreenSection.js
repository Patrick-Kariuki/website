import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Containment and specialization of the FullScreen Sections.
 * @param {*} param0 
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
    return (
        <VStack
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground ? "white" : "black"}
        >
            <VStack maxWidth="1280px" minHeight="100vh" {...boxProps} >
                {children}
            </VStack>
        </VStack>
    );
};

export default FullScreenSection;