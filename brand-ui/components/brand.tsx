'use client'
import React from "react";
import Form from "./form";
import Results from "./results";
import Image from "next/image";
import logo from "../public/brand_small.svg";

const Brand: React.FC = () => {
  const CHARACTER_LIMIT: number = 32;
  const ENDPOINT: string =
    "https://1g7u1xr36l.execute-api.us-east-1.amazonaws.com/prod/generate_idea";
  const [prompt, setPrompt] = React.useState("");
  const [snippet, setSnippet] = React.useState("");
  const [keywords, setKeywords] = React.useState([]);
  const [url, setUrl] = React.useState("");
  const [hasResult, setHasResult] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = () => {
    console.log("Submitting: " + prompt);
    setIsLoading(true);
    fetch(`${ENDPOINT}?prompt=${prompt}`)
      .then((res) => res.json())
      .then(onResult);
  };

  const onResult = (data: any) => {
    setSnippet(data.snippet);
    setKeywords(data.keywords);
    setUrl(data.url);
    setHasResult(true);
    setIsLoading(false);
  };

  const onReset = () => {
    setPrompt("");
    setHasResult(false);
    setIsLoading(false);
  };

  let displayedElement = null;

  if (hasResult) {
    displayedElement = (
      <Results
        snippet={snippet}
        keywords={keywords}
        onBack={onReset}
        prompt={prompt}
        url={url}
      />
    );
  } else {
    displayedElement = (
      <Form
        prompt={prompt}
        setPrompt={setPrompt}
        onSubmit={onSubmit}
        isLoading={isLoading}
        characterLimit={CHARACTER_LIMIT}
      />
    );
  }

  const gradientTextStyle =
    "text-white text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-light w-fit mx-auto";

    return (
      <div className="h-screen flex">
        <div className="max-w-md m-auto p-2">
          <div className="bg-violet-950 p-6 rounded-md text-white">
            <div className="text-center my-6">
              <Image src={logo} width={80} height={80} alt="BrandIt Logo" />
    
              {/* Conditionally render the image block */}
              {!hasResult && (
                <div className={gradientTextStyle + " img-container"}>
                  <img src="/brand.png" alt="Brand" />
                </div>
              )}
            </div>
    
            {displayedElement}
          </div>
        </div>
      </div>
    );
    
};

export default Brand;
