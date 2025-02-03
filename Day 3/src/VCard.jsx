import PropTypes from "prop-types";

export const VideoCard = ({
  thumbnail,
  profileUrl,
  title,
  views,
  channelName,
  publishedDate,
  duration, // Fixed duration as a prop
}) => {
  return (
    <div className="w-[200px] h-auto m-auto">
      <div>
        <Preview thumbnail={thumbnail} className="relative">
          <Duration
            className="absolute bottom-1 right-1 bg-white rounded-sm text-[8px] p-0.5"
            text={duration} // Fixed passing duration
          />
        </Preview>
      </div>
      <div className="flex gap-1">
        <Profile profileUrl={profileUrl} />
        <div>
          <Title title={title} />
          <ChannelName channelName={channelName} />
          <div className="flex gap-1">
            <Views views={views} />
            <PublishedDate publishedDate={publishedDate} />
          </div>
        </div>
      </div>
    </div>
  );
};

VideoCard.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  profileUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.string.isRequired,
  channelName: PropTypes.string.isRequired,
  publishedDate: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired, // Fixed duration prop type
};

export const Preview = ({ thumbnail, children, className }) => {
  return (
    <div className={`rounded overflow-hidden mb-1 ${className}`}>
      <img className="w-full h-auto" src={thumbnail} alt="Preview Image" />
      {children}
    </div>
  );
};

Preview.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

export const Profile = ({ profileUrl }) => {
  return (
    <div>
      <img
        className="w-[25px] h-[25px] rounded-full"
        src={profileUrl}
        alt="Profile Image"
      />
    </div>
  );
};

Profile.propTypes = {
  profileUrl: PropTypes.string.isRequired,
};

export const Title = ({ title }) => {
  return (
    <div>
      <p className="text-gray-700">{title}</p>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export const ChannelName = ({ channelName }) => {
  return (
    <div>
      <p className="text-gray-500 text-[12px]">{channelName}</p>
    </div>
  );
};

ChannelName.propTypes = {
  channelName: PropTypes.string.isRequired,
};

export const Views = ({ views }) => {
  return (
    <div>
      <p className="text-[10px] text-gray-600">{views}</p>
    </div>
  );
};

Views.propTypes = {
  views: PropTypes.string.isRequired,
};

export const PublishedDate = ({ publishedDate }) => {
  return (
    <div>
      <p className="text-[10px] text-gray-600">{publishedDate}</p>
    </div>
  );
};

PublishedDate.propTypes = {
  publishedDate: PropTypes.string.isRequired,
};

export const Duration = ({ className, text }) => {
  return (
    <div>
      <p className={`${className}`}>{text}</p>
    </div>
  );
};

Duration.propTypes = {
  className: PropTypes.string,
  text: PropTypes.string.isRequired, // Fixed to accept text as a prop
};
