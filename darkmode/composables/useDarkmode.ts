// Ref and Reactive should only be used in a script setup

const useDarkmode = () => {
    const isDarkmode = useState("darkmode", () => false);
    const toggleDarkmode = () => {
        isDarkmode.value = !isDarkmode.value;
    }
    return {
        isDarkmode,
        toggleDarkmode,
    }
}

export default useDarkmode;