import PromptCard from "./PromptCard";
import Link from "next/link";

const SearchList = ({ promptsList }: any) => {
  console.log("In search List", promptsList);
  if (promptsList?.length > 0) {
    return (
      <span className="search-bar">
        <ul>
          {promptsList.map((prompt: any) => {
            const promptUrl = `/prompt?id=${prompt._id}`;
            return (
              <Link href={promptUrl}>
                <li key={prompt._id}>
                  <PromptCard post={prompt} />
                </li>
              </Link>
            );
          })}
        </ul>
      </span>
    );
  } else {
    return <span></span>;
  }
};

export default SearchList;
