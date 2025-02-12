type VideoProps = {
  link: string;
};

const Video: React.FC<VideoProps> = ({ link }) => {
  return (
    <div className="description__video">
      <iframe
        width="100%"
        height="100%"
        src={link}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
