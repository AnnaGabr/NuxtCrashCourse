// Ref and Reactive should only be used in a script setup

const useDarkmode = () => {
    const isDarkmode = useState("darkmode", () => true);
    return {
        isDarkmode,
    }
}

export default useDarkmode;