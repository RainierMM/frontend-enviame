import { format } from "date-fns";
import "./molecules.css";

const Card = ({ data }) => {
  return (
    <div
      className="my-card"
      onClick={() => window.open(data.urls[0].url, "_blank")}
    >
      <img
        src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
        className="img img-responsive"
      />
      <div className="profile-name">{data.name}</div>
      <div className="profile-overview">
        <div className="profile-overview">
          <div className="row">
            <div className="col-ms-4">
              <h3>{format(new Date(data.modified), "yyyy-MM-dd")}</h3>
              <p>
                {data.description !== "" ? data.description : "No description"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
