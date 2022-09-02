// Ref and Reactive should only be used in a script setup

const useDarkmode = () => {
    const isDarkMode = useState("darkMode", () => false);
    return {
        isDarkMode,
    }
}