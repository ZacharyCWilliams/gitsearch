import BookOutlinedIcon from "@mui/icons-material/BookOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import CircleIcon from "@mui/icons-material/Circle";
import { getLanguageColor } from "../utils/language";

interface RepositoryProps {
  repo: GithubRepository;
}

export default function Repository({ repo }: RepositoryProps) {
  return (
    <li className="flex flex-col bg-white p-4 w-80 h-40 m-4 rounded-md border justify-center">
      <a href={repo.html_url} target="_blank" rel="noreferrer">
        <span className="mr-2 text-gray-500">
          <BookOutlinedIcon
            style={{ height: "1.4rem", color: "rgb(101, 109, 118)" }}
          />
        </span>
        <span className="text-blue-500 mr-1 font-semibold">{repo.name}</span>
        <span></span>
      </a>
      <div>
        <p className="text-xs my-2 text-gray-500">{repo.description}</p>
      </div>
      <div className="flex space-around text-gray-600">
        {repo.language ? (
          <span className="flex items-center mr-2">
            <CircleIcon
              style={{
                color: getLanguageColor(repo.language),
                marginRight: "0.2rem",
                fontSize: "12px",
              }}
            />
            <span className="text-xs">{repo.language}</span>
          </span>
        ) : (
          <span className="flex items-center mr-2">
            <CircleIcon
              style={{
                color: getLanguageColor("other"),
                marginRight: "0.2rem",
                fontSize: "12px",
              }}
            />
            <span className="text-xs">Other</span>
          </span>
        )}

        {repo.stargazers_count && (
          <span className="flex items-center mr-2">
            <span className="text-xs items-center">
              <StarOutlineOutlinedIcon />
            </span>
            <span className="text-xs items-center">
              {repo.stargazers_count}
            </span>
          </span>
        )}
        {repo.forks && (
          <span className="flex items-center">
            <span className="text-xs items-center">
              <CodeOutlinedIcon />
            </span>
            <span className="text-xs">{repo.forks}</span>
          </span>
        )}
      </div>
    </li>
  );
}
