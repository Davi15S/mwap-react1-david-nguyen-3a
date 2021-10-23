import "./App.css";
import image from "./image.jpg";

function Content() {
  return (
    <div className="App-container">
      <div className="mainText">
        <p className="firstText">Portfolio</p>
        <p className="secondText">Recent work</p>
      </div>

      <div className="gridContainer">
        <div className="gridItem">
          <ContentItem title='Doggo'/>
        </div>
        <div className="gridItem">
          <ContentItem title='Dog'/>
        </div>
        <div className="gridItem">
          <ContentItem title='Doggo'/>
        </div>
        <div className="gridItem">
          <ContentItem title='Dog'/>
        </div>
        <div className="gridItem">
          <ContentItem title='Doggo'/>
        </div>
        <div className="gridItem">
          <ContentItem title='Dog'/>
        </div>
      </div>
    </div>
  );
}

function ContentItem({title}) {
  return (
    <div>
      <img className="image" src={image} alt="" />
      <p className="doggo">{title}</p>
      <p className="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        voluptatem ad dicta delectus inventore dolores voluptates officia
        quisquam rerum itaque deleniti, aspernatur amet quidem numquam
        perspiciatis quasi quas harum sit.
      </p>
    </div>
  );
}

export default Content;
