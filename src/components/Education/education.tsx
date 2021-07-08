import { Typography } from "@material-ui/core";
import { SimplePaper } from "../Papers/papers"
import { UBCO } from "./personalInfo";


export const Education = () => {
    return (
        <>
            <Typography>
                Education
            </Typography>
            <SimplePaper {...UBCO} />
        </>
    );
}