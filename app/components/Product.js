import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import "./product.css";
import Link from "next/link";
import "../globals.css";

const mappedImages = ({ blok }) => {
  let mapp = blok.image.map((i) => i);
  console.log(mapp);
};

const Product = ({ blok }) => (
  <div className={`product_div_${blok.id}`} {...storyblokEditable(blok)}>
    <div className="product-image">
      <Link href={`/evenimente/${blok.id}`}>
        <h1 className="titlu-buchet_over_image">{blok.title}</h1>
        <img className="image" src={blok.image[0].filename} alt="feature" />
      </Link>
    </div>

    <div className="informations">
      <h1 className="titlu-buchet">{blok.title}</h1>

      <div className="descriere">{blok.description}</div>

      <div className="descriere">{blok.desc1}</div>

      <div className="descriere">{blok.desc2}</div>

      <div className="descriere">{blok.desc3}</div>

      <div className="descriere">{blok.desc4}</div>

      <Link className="detalii" href={`/evenimente/${blok.id}`}>
        <div className="detalii_subdiv">VEZI DETALII</div>
      </Link>
    </div>
  </div>
);

export default Product;
