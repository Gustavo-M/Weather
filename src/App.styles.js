
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    wrap: {
        backgroundColor: "#f4f4f4",
        padding: 40,
    },
    title: {
        paddingBottom: 20,
        color: "#263238",
    }, 
    subTitle: {
        paddingBottom: 20,
        fontSize: 14,
        color: "#263030",
    },
    divField: {
        marginBottom: 20,
    },
    field: {
        backgroundColor: "#FFFFFF",
    }
}));

export default useStyles;