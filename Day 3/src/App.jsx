import { VideoCard } from "./VCard";
import videos from "./Videos"; // Fixed import

function App() {
  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {videos.map((video, index) => (
        <VideoCard
          key={index}
          thumbnail={video.thumbnail}
          profileUrl={video.profileUrl}
          title={video.title}
          channelName={video.channelName}
          views={video.views}
          publishedDate={video.publishedDate}
          duration={video.duration} // Fixed duration prop
        />
      ))}
    </div>
  );
}

export default App;
