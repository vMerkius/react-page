import penImg from "/assets/img/icon-pen.svg";
import calendarImg from "/assets/img/icon-calendar.svg";
import { useNavigate } from "react-router-dom";

type BlogCardProps = {
  id: number;
  img: string;
  title: string;
  author: string;
  date: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  id,
  img,
  title,
  author,
  date,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <div className="blog-card">
      <img src={img} alt={title} className="blog-card__img" />
      <div className="blog-card__content">
        <div className="blog-card__upper">
          <p className="blog-card__author">
            <img src={penImg} alt="Pen Icon" className="blog-card__icon" />
            {author}
          </p>
          <p className="blog-card__date">
            <img src={calendarImg} alt="Pen Icon" className="blog-card__icon" />
            {date}
          </p>
        </div>
        <h4 className="blog-card__title">{title}</h4>
        <p className="blog-card__description">{description}</p>
        <button
          onClick={() => {
            navigate(`/blog/${id}`);
          }}
          className="blog-card__more-btn"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
