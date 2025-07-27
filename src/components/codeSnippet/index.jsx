import { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import SecondaryButton from "../buttons/SecondaryButton";
import { Icon } from "lucide-react";
import IconButton from "../buttons/IconButton";

const CodeSnippet = ({ code, title, codingLanguage }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  // Update viewport width to handle small screen behavior
  useEffect(() => {
    const updateViewportWidth = () => setViewportWidth(window.innerWidth);
    updateViewportWidth();
    window.addEventListener("resize", updateViewportWidth);
    return () => window.removeEventListener("resize", updateViewportWidth);
  }, []);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  const copyToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Copied to clipboard:", text);
    setIsCopied(true)
    setTimeout(()=>{
      setIsCopied(false)
    },3000)
  } catch (err) {
    console.error("Failed to copy:", err);
  }
};

  return (
    <div className="py-4 px-4 relative flex w-full flex-col items-start justify-center overflow-hidden bg-background mt-12 mb-2">
      <h2 className="text-lg md:text-xl font-bold mb-1">{title}</h2>

      <div
        className={`relative rounded-lg w-full overflow-hidden  ${
          isExpanded ? "h-auto no-scrollbar" : "max-h-[30vh] h-[30vh]"
        }`}
      >
        <div className="relative z-0 ">
          {" "}
          <pre className=" relative px-4 pb-3 rounded-lg overflow-auto no-scrollbar md:text-base text-sm">
            {isExpanded && (
              <IconButton
                icon={isCopied?"material-symbols-light:check-rounded":"material-symbols-light:content-copy-outline"}
                className="p-1 border rounded-lg cursor-pointer text-4xl hover:scale-105 duration-100 ease-in-out absolute right-6 top-4"
                onClick={()=>copyToClipboard(code)}
              />
            )}

            <SyntaxHighlighter language={codingLanguage} style={atomDark}>
              {code}
            </SyntaxHighlighter>
          </pre>
        </div>
        <div
          className={`absolute top-0 left-0 z-10 ${
            isExpanded
              ? "h-full w-full flex justify-center items-end relative bottom-8 overflow-visible pb-1"
              : "bg-gradient-to-b from-transparent to-black h-full w-full opacity-100 flex justify-center items-center"
          }`}
        >
          <SecondaryButton
            onClick={handleToggle}
            variant={isExpanded ? "outline" : "default"}
            customStyles={`${isExpanded ? "relative top-1" : ""} `}
            text={isExpanded ? "Collapse" : "Expand"}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeSnippet;
