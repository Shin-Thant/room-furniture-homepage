import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import arrow from "./images/icon-arrow.svg";
import prev from "./images/icon-angle-left.svg";
import next from "./images/icon-angle-right.svg";
import imgDark from "./images/image-about-dark.jpg";
import imgLight from "./images/image-about-light.jpg";
import { useEffect, useState } from "react";
import { Items } from "./custom-data/Items";

function App() {
    const [imgIndex, setImgIndex] = useState(0);
    const [head, setHead] = useState("");
    const [text, setText] = useState("");
    const [img, setImg] = useState("");

    const prevImg = () => {
        if (imgIndex <= 0) {
            setImgIndex(2);
            return;
        }
        setImgIndex(imgIndex - 1);
    };
    const nextImg = () => {
        if (imgIndex >= 2) {
            setImgIndex(0);
            return;
        }
        setImgIndex(imgIndex + 1);
    };

    useEffect(() => {
        Items.map((item, index) => {
            if (index === imgIndex) {
                setHead(item.head);
                setText(item.text);
                setImg(item.img);
            }
        });
    }, [imgIndex]);

    return (
        <div className="main-container">
            <section className="dynamic-sec">
                <div className="dynamic-img-container">
                    <Navbar />
                    <img src={img} alt="" />
                    <div className="change-btns">
                        <button onClick={prevImg} className="prev-btn">
                            <img src={prev} alt="" />
                        </button>
                        <button onClick={nextImg} className="next-btn">
                            <img src={next} alt="" />
                        </button>
                    </div>
                </div>
                <div className="dynamic-content">
                    <div className="dynamic-text-container">
                        <h1 className="dynamic-head">{head}</h1>
                        <p className="dynamic-text">{text}</p>
                        <div className="separate-link">
                            SHOP NOW <img src={arrow} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="static-sec">
                <div className="static-imgs static-first-img">
                    <img src={imgDark} alt="" />
                </div>
                <div className="static-content">
                    <div className="static-text-container">
                        <h1 className="static-head">ABOUT OUR FURNITURE</h1>
                        <p className="static-text">
                            Our multifunctional collection blends design and
                            function to suit your individual taste. Make each
                            room unique or pick a cohesive theme that best
                            express your interests and what inspires you. Find
                            the furniture pieces you need. from traditional to
                            contemporary styles or anything in between. Product
                            specialists are available to help you create your
                            dream space.
                        </p>
                    </div>
                </div>
                <div className="static-imgs static-second-img">
                    <img src={imgLight} alt="" />
                </div>
            </section>
        </div>
    );
}

export default App;
