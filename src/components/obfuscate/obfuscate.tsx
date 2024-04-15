export const ObfuscatedText: React.FC<{ text: string }> = ({ text }) => {
    return <>{
        text.split("").map((char, index) => {
            return <span key={index}>{char}</span>;
        })
    }</>;
};