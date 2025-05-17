import {
  Eye,
  Globe,
  LogOut,
  Moon,
  Search,
  Settings,
  Sun,
  User2Icon,
} from "lucide-react";
import Button from "../components/Button";
import { Link, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import UserProfileDropdown from "../components/UserProfileDropdown";
import axios from "axios";
import { base_url } from "../utils/base_url";
const token = localStorage.getItem("token");

const Sidebar = () => {
  const Livechannel = [
    {
      id: 0,
      name: "My Channel",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFNeUn89NkscCQdePBFlIp7ixL81eU9pY3g&s",
      viwers: "11.2K",
      category: "Gaming",
    },
    {
      id: 0,
      name: "My Channel",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFNeUn89NkscCQdePBFlIp7ixL81eU9pY3g&s",
      viwers: "11.2K",
      category: "Gaming",
    },
    {
      id: 0,
      name: "My Channel",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFNeUn89NkscCQdePBFlIp7ixL81eU9pY3g&s",
      viwers: "11.2K",
      category: "Gaming",
    },
    {
      id: 0,
      name: "My Channel",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFNeUn89NkscCQdePBFlIp7ixL81eU9pY3g&s",
      viwers: "11.2K",
      category: "Gaming",
    },
  ];
  return (
    <>
      <div className="max-w-[18rem] h-screen border-r p-2 space-y-6">
        <div className="font-bold uppercase">Live Channels</div>
        <ul className=" space-y-4">
          {Livechannel.map((live) => (
            <div className="flex space-x-1" key={live.id}>
              {/* imge */}
              <div className="w-10 h-10 rounded-full">
                <img
                  src={live.img}
                  alt=""
                  className="object-cover rounded-full h-full w-full"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="">
                  <p className="text-sm font-bold">{live.name}</p>
                  <p className="text-xs">{live.category}</p>
                </div>
                <div className="relative">
                  <p className="text-xs font-medium">{live.viwers}</p>
                  <span className="w-2 h-2 rounded-full bg-red-500 absolute top-1 -left-3 animate-pulse-slow "></span>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

// Header with Search and Profile
const Header = () => {
  const [showmenu, toggleMenuVisibility] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search streams, analytics, settings..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {token ? (
          <UserProfileDropdown
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
          />
        ) : (
          <div className="space-x-3">
            <Link to="/login">
              <Button size="sm" variant="secondary">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" variant="primary">
                SignIn
              </Button>
            </Link>
          </div>
        )}
        <div className="relative">
          <div
            onClick={() => toggleMenuVisibility((prev) => !prev)}
            className="cursor-pointer hover:dark:bg-slate-600  p-2 rounded-full dark:text-white"
          >
            <Settings />
          </div>
          {showmenu && (
            <div className=" min-w-[15rem] space-y-2 p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md absolute -translate-x-[12rem] top-12 left-0">
              {[
                {
                  id: 0,
                  label: "Language",
                  icon: Globe,
                  onclick: () => {},
                },
                {
                  id: 2,
                  label: "Theme",
                  icon: theme === "dark" ? Moon : Sun,
                  onclick: toggleTheme,
                },
                {
                  id: 2,
                  label: "Labeled Content",
                  icon: Eye,
                  onclick: () => {},
                },
              ].map((content) => (
                <div
                  key={content.id}
                  className="hover:dark:bg-purple-400/20 hover:bg-slate-100 rounded-lg p-2 cursor-pointer "
                >
                  <li
                    className="list-none flex items-center gap-4 "
                    onClick={content.onclick}
                  >
                    <span>{<content.icon size={18} />}</span>
                    <p>{content.label}</p>
                  </li>
                </div>
              ))}
              {token ? (
                <Button
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                  }}
                  size="sm"
                  variant="ghost"
                  icon={<LogOut />}
                  className=""
                >
                  LogOut
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    window.location.href = "/login";
                  }}
                  size="sm"
                  variant="ghost"
                  icon={<LogOut />}
                  className=""
                >
                  LogIn
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Carousal = () => {
  return (
    <>
      <div className="h-[50vh] dark:bg-slate-200/20 w-full rounded-lg"></div>
    </>
  );
};

const Category = ({data}) => {
  return (
    <>
      <div className="my-4 space-y-4">
        <div className="">
          <h1 className="text-xl">
            <span className="font-bold text-2xl text-purple-500">
              Categories
            </span>{" "}
            we think you'll like
          </h1>
        </div>
        {/* category list */}
        <div className="flex ">
         { <div className="min-w-[15rem] max-w-[15rem]">
            <div className="">
              <img src="" alt="" className="h-44 w-full" />
            </div>
            <div className="">
              <p className="">Category</p>
              <p className="">22.5k</p>
            </div>
            <p className="flex gap-2">
              {" "}
              {["live", "gaming", "bgmi"].map((tag, index) => (
                <p
                  className="p-1 w-fit bg-slate-700 text-xs rounded-lg"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </p>
          </div>}
        </div>
      </div>
    </>
  );
};

// live streams by category

const LiveStreamCard = () => {
  return (
    <>
      <div className=" w-fit bg-slate-600">
        <div className="w-full  relative">
          <video src="" autoPlay muted controls></video>
          <span className="absolute top-0 text-xs bg-red-500 m-2 p-1 rounded-md">
            Live
          </span>
          <span className="absolute top-0 right-0 text-xs m-2 bg-black/30 p-1 flex items-center rounded-md gap-1">
            <User2Icon size={12} />
              200k
          </span>
        </div>
        <div className="flex gap-2 w-full">
          <div className="rounded-full overflow-clip w-10 h-10">
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt=""
              className="rounded-full w-full h-full object-cover"
            />
          </div>
          <div className="overflow-clip">
            <p className="title font-bold text-xl break-words">
              title fff ffwfwef vfvfvr
            </p>
            <p className="description">loremddc</p>
            <p className="flex gap-2">
              {" "}
              {["live", "gaming", "bgmi"].map((tag, index) => (
                <p
                  className="p-1 w-fit bg-slate-700 text-xs rounded-lg"
                  key={index}
                >
                  {tag}
                </p>
              ))}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const LiveStreamByCategory = ({data}) => {
  
  return (
    <>
      <div className="">
        <LiveStreamCard />
      </div>
    </>
  );
};

const ViewerPageContent = () => {
    const [livestreams, setLiveStreams] = useState([]);

  const fetchLiveStreams = async () => {
    try {
      const re = await axios.get(base_url + "streams");
      setLiveStreams(re.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchLiveStreams();
  }, []);

  return (
    <>
      <Header />
      <Carousal />
      <Category  data={livestreams}/>
      <LiveStreamByCategory data={livestreams} />
    </>
  );
};

const ViwerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* <Sidebar /> */}

      {/* Main content */}
      <main className="ml-64 p-8">
        <Routes>
          <Route path="/" element={<ViewerPageContent />} />
        </Routes>
      </main>
    </div>
  );
};

export default ViwerPage;
