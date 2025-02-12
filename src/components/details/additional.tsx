type AdditionalProps = {
  additional: string;
};

const Additional: React.FC<AdditionalProps> = ({ additional }) => {
  return (
    <div className="description__desc">
      <h3 className="description__header">Additional</h3>
      <p className="description__long">{additional}</p>
    </div>
  );
};

export default Additional;
