import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";

const getData = async(userid, setData) => {
  const docref = doc(db, "contacts", userid)
  const res = await getDoc(db, docref)
  console.log(res.data())
}

const Single = () => {
  const [data, setData] = useState(null)
  const userid = useParams().userid
  useEffect(() => {
    console.log("hi")
  })

  return (
    <div className="single">
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={data.img}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{data.displayName} </h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{data.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{data.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
