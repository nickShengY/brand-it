interface ResultsProps {
  prompt: string;
  snippet: string;
  keywords: string[];
  onBack: any;
  url: string;  
}

const Results: React.FC<ResultsProps> = (props) => {
  const keywordElements = [];
  for (let i = 0; i < props.keywords.length; i++) {
    const element = (
      <div
        key={i}
        className="bg-purple-200 p-1 text-teal-700 px-2 text-sm rounded-md"
      >
        #{props.keywords[i]}
      </div>
    );
    keywordElements.push(element);
  }


  

  const keywordElementsHolder = (
    <div className="flex flex-wrap gap-2">{keywordElements}</div>
  );

  const resultSection = (label: string, body: any) => {
    return (
      <div className="bg-violet-700 p-4 my-3 rounded-md">
        <div className="text-slate-400 text-sm font-bold mb-4">{label}</div>
        <div>{body}</div>
      </div>
    );
  };
  

  const imageSection = resultSection(
    "Image",
    <img 
      src={props.url} 
      alt="Result Image" 
      style={{maxWidth: "350px", maxHeight: "350px"}}
    />
  );

  return (
    <>
      <div className="mb-6">
        {/* {resultSection(
          "Prompt",
          <div className="text-lg font-bold">{props.prompt}</div>
        )} */}
        {resultSection("Branding Snippet", props.snippet)}
        {resultSection("Keywords", keywordElementsHolder)}
        {imageSection} 

      </div>
      <button
        className="bg-gradient-to-r from-yellow-200 
        to-yello-500 disabled:opacity-75 w-full p-2 rounded-md text-lg"
        onClick={props.onBack}
      >
        Back
      </button>
    </>
  );
};

export default Results;
